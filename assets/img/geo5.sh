#!/bin/bash
UA="PedeauxFamilyArchive/1.0 (family.kevinpedeaux.com)"
q() { local l="$1"; local s="$2"
  r=$(curl -s -H "User-Agent: $UA" --get "https://nominatim.openstreetmap.org/search" --data-urlencode "q=$s" --data-urlencode "format=json" --data-urlencode "limit=3")
  echo "$l =>"; echo "$r" | python -c "import sys,json;d=json.load(sys.stdin);[print(f\"   {x['lat']},{x['lon']} :: {x['display_name'][:78]}\") for x in d] if d else print('   NO RESULT')" 2>/dev/null
  sleep 1.1; }
q "st-cecilia-1" "Saint Cecilia Church, New Orleans, Louisiana"
q "st-cecilia-2" "1101 Charbonnet Street, New Orleans, Louisiana"
q "st-cecilia-3" "Saint Cecilia, Bywater, New Orleans"
