#!/bin/bash
UA="PedeauxFamilyArchive/1.0 (family.kevinpedeaux.com)"
q() { local l="$1"; local s="$2"
  r=$(curl -s -H "User-Agent: $UA" --get "https://nominatim.openstreetmap.org/search" --data-urlencode "q=$s" --data-urlencode "format=json" --data-urlencode "limit=2")
  echo "$l =>"; echo "$r" | python -c "import sys,json;d=json.load(sys.stdin);[print(f\"   {x['lat']},{x['lon']} :: {x['display_name'][:80]}\") for x in d] if d else print('   NO RESULT')" 2>/dev/null
  sleep 1.1; }
q "2883-dauphine"  "2883 Dauphine Street, New Orleans, Louisiana"
q "cypress-grove"  "Cypress Grove Cemetery, New Orleans, Louisiana"
q "st-alphonsus"   "St Alphonsus Church, Constance Street, New Orleans, Louisiana"
