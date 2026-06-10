#!/usr/bin/env bash
# Laedt die Profi-Fotos aus dem oeffentlichen OneDrive-Share per badger-Token.
# Read-only gegenueber OneDrive; schreibt nur lokal nach _quelle-fotos/.
set -uo pipefail

TOKEN="badger eyJhbGciOiJSUzI1NiIsImtpZCI6IkQ1OEU4N0IzRUM0OUNEMjM0QkJCNjhCRTY3QjREN0IxQzU1QkREQTYiLCJ4NXQiOiIxWTZIcy14SnpTTkx1MmktWjdUWHNjVmIzYVkiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJodHRwczovL29uZWRyaXZlLmNvbS8iLCJpc3MiOiJodHRwczovL2JhZGdlci5zdmMubXMvdjEuMC9hdXRoIiwiZXhwIjoxNzgxMTgzNTEyLCJuYmYiOjE3ODA1Nzg3MTIsImdpdmVuX25hbWUiOiIyNiIsImZhbWlseV9uYW1lIjoiU2hyaW1wIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc2lkIjoiOGFlNWM1YzgyMjAzMzQwYWQ3OTQ1YzI4YjNjNGYzMjMiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImlhdCI6MTc4MDU3ODcxMn0.fZ6eu5w10SXSu8l0cqjuG8xoS3UTObCFafFQkzaTiVglzvVoe8o_xqSZ7-go0agSjvJbqFRhprLkYuMeSz3xzwv_7G01_ND_ULITMcMdVf2UX9PFS0XLjl6vxLOIQZ9qVGm6wkh1aLtSm_Mm9mzjZ_pOIErxvtto2lcM1JXqZlMAV91Ycmubcyg5G4KyU2V3eWe9cdR50YePGIW75oLSMhA4-ZAXHVGWDvJWFFSBebcL-PKPEC6XUtpzGteZCdfADH8M05BMmzKf0g1N7bVUa0oXnAA75tu1HYYbmg3lUI09d95RaVZz6snMMaD8mKX8rPG4E4cH_JBdqHaQorewZA"
DRIVE="c0ca478c7cdd2da5"
API="https://my.microsoftpersonalcontent.com/_api/v2.0/drives/${DRIVE}/items"
OUT="_quelle-fotos"

children() {
  curl -s --max-time 60 "${API}/$1/children?\$select=id,name,size,folder,@content.downloadUrl&\$top=300" \
    -H "Authorization: $TOKEN" -H "Accept: application/json"
}

# Laedt alle Bild-Dateien eines Ordners (per ID) in ein Zielverzeichnis.
dl_folder() {
  local id="$1" dest="$2"
  mkdir -p "$dest"
  children "$id" > /tmp/_od_kids.json
  python3 - "$dest" <<'PY'
import json,sys,os
dest=sys.argv[1]
d=json.load(open('/tmp/_od_kids.json'))
v=d.get('value',[])
items=[]
for x in v:
    if 'folder' in x: continue
    url=x.get('@content.downloadUrl')
    if url and x['name'].lower().endswith(('.jpg','.jpeg','.png','.webp','.heic','.tif','.tiff')):
        items.append((x['name'],url))
with open('/tmp/_od_dl.txt','w') as f:
    for name,url in items:
        f.write(name+'\t'+url+'\n')
print(f"  {len(items)} Bilder gefunden")
PY
  local n=0 ok=0
  while IFS=$'\t' read -r name url; do
    [ -z "$name" ] && continue
    n=$((n+1))
    if curl -s --max-time 120 -o "$dest/$name" "$url"; then
      ok=$((ok+1))
    else
      echo "  FEHLER: $name"
    fi
  done < /tmp/_od_dl.txt
  echo "  -> $ok/$n geladen nach $dest"
}

echo "### Root pruefen ###"
children "C0CA478C7CDD2DA5!341587" > /tmp/_od_root.json
# Ordner-IDs ermitteln (auch fuer Exterior-Unterordner)
FOOD="C0CA478C7CDD2DA5!s9bcf3a2e83074572851bbe05878e298d"
EXT="C0CA478C7CDD2DA5!s049182f06c5045dead6977b2e2dce0b6"
INT="C0CA478C7CDD2DA5!sfabb553c5b9e4ca49d8395befb4da3bf"

echo "### Food ###"
dl_folder "$FOOD" "$OUT/food"

echo "### Exterior-Unterordner ermitteln ###"
children "$EXT" > /tmp/_od_ext.json
EXT_DETAILS=$(python3 -c "import json;print(next(x['id'] for x in json.load(open('/tmp/_od_ext.json'))['value'] if x.get('name')=='Details'))")
EXT_WIDE=$(python3 -c "import json;print(next(x['id'] for x in json.load(open('/tmp/_od_ext.json'))['value'] if x.get('name')=='Wide Shot'))")
echo "### Exterior/Details ###"
dl_folder "$EXT_DETAILS" "$OUT/exterior-details"
echo "### Exterior/Wide Shot ###"
dl_folder "$EXT_WIDE" "$OUT/exterior-wide"

echo "### Interior tief pruefen ###"
children "$INT" > /tmp/_od_int.json
python3 -c "import json;[print('  Interior-Sub:',x.get('name'),x.get('id'),'folder' if 'folder' in x else 'file') for x in json.load(open('/tmp/_od_int.json'))['value']]"

echo "### FERTIG Phase 1 (Food + Exterior). Interior separat. ###"
find "$OUT" -type f | wc -l | xargs echo "Dateien gesamt:"
