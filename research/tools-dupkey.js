// Duplicate-key lint for data.js / places.js.
//
// Why this exists: a JS object literal silently drops all but the LAST
// definition of a repeated key. `node --check` passes, the file parses, and
// authored content simply never renders. That shipped on this site — two
// people had `records:` twice and five written cards vanished.
//
// Usage: node research/tools-dupkey.js assets/js/data.js assets/js/places.js

const fs = require('fs');

function lint(path) {
  const src = fs.readFileSync(path, 'utf8');
  const found = [];
  const scopes = [new Map()];
  let depth = 0;
  let i = 0;
  let line = 1;

  while (i < src.length) {
    const c = src[i];

    if (c === '\n') { line++; i++; continue; }

    // Skip string literals, including escapes, so apostrophes in prose
    // (and there are thousands) never confuse the scanner.
    if (c === "'" || c === '"' || c === '`') {
      const quote = c;
      i++;
      while (i < src.length && src[i] !== quote) {
        if (src[i] === '\\') { i += 2; continue; }
        if (src[i] === '\n') line++;
        i++;
      }
      i++;
      continue;
    }

    if (c === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i++;
      continue;
    }
    if (c === '/' && src[i + 1] === '*') {
      i += 2;
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) {
        if (src[i] === '\n') line++;
        i++;
      }
      i += 2;
      continue;
    }

    if (c === '{') { depth++; scopes[depth] = new Map(); i++; continue; }
    if (c === '}') { scopes.length = Math.max(1, depth); depth = Math.max(0, depth - 1); i++; continue; }

    // A key is an identifier followed by a colon, at the start of a member
    // position (preceded by '{', ',' or whitespace).
    const prev = i > 0 ? src[i - 1] : '{';
    if (/[{,\s]/.test(prev)) {
      const m = /^([A-Za-z_$][\w$]*)\s*:/.exec(src.slice(i, i + 60));
      if (m) {
        const key = m[1];
        if (!scopes[depth]) scopes[depth] = new Map();
        const scope = scopes[depth];
        if (scope.has(key)) {
          found.push(path + ': DUPLICATE KEY "' + key + '" at line ' + line +
                     ' (first defined line ' + scope.get(key) + ', depth ' + depth + ')');
        } else {
          scope.set(key, line);
        }
        i += m[0].length;
        continue;
      }
    }

    i++;
  }
  return found;
}

let all = [];
for (const f of process.argv.slice(2)) all = all.concat(lint(f));

if (all.length) {
  all.forEach(function (x) { console.log(x); });
  console.log('\nTOTAL: ' + all.length + ' duplicate key(s)');
  process.exit(1);
} else {
  console.log('OK: zero duplicate keys');
}
