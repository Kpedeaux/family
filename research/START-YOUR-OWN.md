# Starting a documented family history

Paste everything below into Claude Code (or Claude) as your first message. Fill in the
bracketed parts first. Everything after that is instructions for the AI.

---

I want to build a documented family history. Not a hobby tree of guesses copied off other
people's trees, but something where every parent-child link is backed by a record I can point
at, and where the things we do not know are stated plainly instead of quietly filled in.

## What I'm starting with

- My name: **[YOUR NAME]**
- Where my family is from, as far as I know: **[e.g. "eastern Kentucky, and somewhere in Ireland before that"]**
- Names I'm confident about: **[list parents, grandparents, great-grandparents with any dates and places you're sure of]**
- Family stories I've heard but can't prove: **[e.g. "we're supposedly related to a famous outlaw", "the name was changed at Ellis Island"]**
- Papers I can get my hands on: **[funeral cards, a family Bible, obituaries, an aunt's notebook, photos with writing on the back, a shoebox nobody has opened]**
- Relatives still alive who might remember things: **[names, and who's oldest]**

## The one rule I want you to hold to

**A parent-child link only counts as documented when a single record names both the child and
the parent.** A shared surname is not evidence. A matching birth year is not evidence. Two trees
on Ancestry agreeing with each other is not evidence, because one of them copied the other.

Sort every link into one of three tiers and show which is which:

- **Documented**: a civil or church record names both people
- **Single source**: probably right, but resting on one uncorroborated thing, often a
  user-submitted memorial or a family paper
- **Inferred**: the circumstances are strong but no document says it yet

Tiers move in both directions. If I question something and it turns out I over-trusted it,
downgrade it and say so.

## How I want you to work

1. **Start with what's in the house, not what's online.** Ask me for photos of every paper I have
   before you search anything. Family papers give you names and dates to search *for*. Searching
   blind wastes hours.
2. **Ask me to interview the oldest living relative early**, and give me specific questions to
   ask rather than "tell me about the family." Ask what they were *told*, and by whom. Note who
   said what and when, because family memory is a source and deserves a citation like any other.
3. **Quote records, don't summarize them.** I want the actual wording, with the volume and page,
   so I can order the original.
4. **Tell me when you're guessing.** Say "probable, not proven" out loud, and say what document
   would settle it.
5. **Publish the dead ends.** If a lead dies, write down that it died and why, so neither of us
   chases it again in six months.
6. **When you correct yourself, leave the correction visible.** I would rather see "I had this
   wrong and here's how I found out" than a silently edited file.
7. **Keep a running research log** in a separate file: what was searched, what was found, what
   came back empty, and the exact next step. Empty results are findings and belong in it.

## Research techniques that actually work

Use these. They are what breaks walls in practice.

- **Church marriage records name parents when civil indexes don't.** Almost every government
  vital index gives you two names and a date. The church act for the same wedding often gives
  both sets of parents. This is the single highest-yield trick there is.
- **When baptisms are lost, go to the marriage file.** Burned, flooded, and just plain missing
  registers are normal. Marriage files frequently contain a *copy* of a baptism certificate
  submitted as proof of age. The parents are in there.
- **A widow's marriage record will not name her parents. Her first marriage will.** A woman
  marrying as a widow contracts for herself, so nobody records her father. If she is stuck, go
  *backwards* to the earlier marriage when she was young and under her family's authority.
- **When church records run out, go to court records.** Wills, estate inventories, guardianship
  hearings, lawsuits, notarial acts, land sales. These name relationships explicitly because
  money is involved, and they survive when parish books don't.
- **Search every spelling.** Clerks wrote what they heard. Our family appears as Pedeaux, Pedo,
  Padon, Pedaux, and Tedeaux across five censuses. Try the phonetic variants, and try searching
  by *first name plus place plus year* with no surname at all.
- **Check a recurring name's occupation before reading it as kinship.** A name appearing across
  five of a family's documents looks like a relative until you find out he was the notary. Same
  goes for priests, clerks, doctors, and midwives.
- **Occupation is a social network.** People witnessed each other's weddings and stood as
  godparents because they worked the same trade. If you can't find a blood link, the trade may
  be the actual explanation.
- **Cemeteries and shared tombs solve lines.** Who is buried together, and in whose plot, is
  evidence. So is who paid for the stone.
- **Obituaries name survivors**, which means they name relationships no index will give you.
  Newspaper archives and the local public library's obituary index are worth real time.

## Free sources to try before paying for anything

- **FamilySearch.org** (free, needs a login): census, vital records, and huge scanned collections.
  Its *church* marriage collections are where the parents hide.
- **The diocese or archdiocese** for the relevant area. Many have published sacramental abstracts,
  and some have put the actual registers online for free. Ours had 43 colonial registers scanned
  and posted with no paywall, which nobody had told us.
- **The state or national archive.** Italy has *Antenati*. Germany has *Matricula* and
  *Archion*. France has departmental archives, most of them free and unindexed, which means you
  page through by hand and find things nobody else has.
- **The county courthouse and the state's vital records index.**
- **The Wayback Machine**, for the personal genealogy sites that died with GeoCities and Tripod.
  A lot of very good 2005-era research is only there now.
- **Newspapers**: the local library, GenealogyBank, Chronicling America.

## What I'd like built

A running research log, and a **simple static website** for the tree itself, so relatives can
actually read it. Plain HTML, CSS, and JavaScript with no framework and no build step. One data
file holding every person, so the site is generated from a single source of truth.

Include:
- The **record wording quoted** on each person, with its citation
- The **evidence tier shown as a badge** on every link
- A **corrections page**: places where a primary record contradicts what's widely posted online
- An **open questions page**, listing only things that are genuinely still open. When something
  gets solved, take it off that list.
- A **validation script** I can run after every change, which walks the data file and confirms
  every parent reference resolves to a real person. Run it before every commit. It will catch
  the typo that silently breaks the tree.

## Start here

Before you search for anything: ask me for the papers, and give me the list of questions for the
oldest person still living. Then tell me which single branch looks most likely to break open
first, and why, and we'll start there instead of everywhere at once.
