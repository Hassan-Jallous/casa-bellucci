#!/usr/bin/env python3
"""Erstellt beschriftete Kontaktboegen + Code->Datei-Index fuer die Sichtung."""
import os, json, re, math
from PIL import Image, ImageDraw, ImageFont

SRC = "_quelle-fotos"
OUTDIR = os.path.join(SRC, "_kontakt")
os.makedirs(OUTDIR, exist_ok=True)

GROUPS = [
    ("food",            "F",  4),
    ("exterior-details","ED", 5),
    ("exterior-wide",   "WS", 5),
    ("interior",        "INT",5),
]
THUMB = 380          # lange Kante eines Thumbnails
LABEL_H = 34
PAD = 8
MAXPERSHEET = 20     # max Bilder pro Bogen

def font(sz):
    for p in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf",
              "/System/Library/Fonts/Helvetica.ttc",
              "/Library/Fonts/Arial.ttf"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, sz)
            except Exception: pass
    return ImageFont.load_default()

F = font(22)

def num_of(name):
    m = re.search(r'-(\d+)\.[a-zA-Z]+$', name)
    return int(m.group(1)) if m else 0

index = {}

def make_sheet(files, prefix, cols, sheet_name):
    cell_w = THUMB + PAD
    cell_h = THUMB + LABEL_H + PAD
    rows = math.ceil(len(files) / cols)
    W = cols * cell_w + PAD
    H = rows * cell_h + PAD
    canvas = Image.new("RGB", (W, H), (245, 243, 238))
    draw = ImageDraw.Draw(canvas)
    for i, (code, path) in enumerate(files):
        r, c = divmod(i, cols)
        x = PAD + c * cell_w
        y = PAD + r * cell_h
        try:
            im = Image.open(path); im = im.convert("RGB")
            im.thumbnail((THUMB, THUMB))
        except Exception as e:
            continue
        tw, th = im.size
        ox = x + (THUMB - tw)//2
        oy = y + LABEL_H + (THUMB - th)//2
        # Label-Hintergrund
        draw.rectangle([x, y, x+THUMB, y+LABEL_H], fill=(30,30,30))
        draw.text((x+6, y+5), code, fill=(255,255,255), font=F)
        canvas.paste(im, (ox, oy))
    out = os.path.join(OUTDIR, sheet_name)
    canvas.save(out, quality=82)
    return out

for folder, prefix, cols in GROUPS:
    p = os.path.join(SRC, folder)
    if not os.path.isdir(p): continue
    files = [f for f in os.listdir(p) if f.lower().endswith(('.jpg','.jpeg','.png'))]
    files.sort(key=num_of)
    coded = []
    for f in files:
        code = f"{prefix}-{num_of(f)}"
        full = os.path.join(p, f)
        index[code] = full
        coded.append((code, full))
    if not coded:
        print(f"{folder}: leer"); continue
    # in Boegen aufteilen
    n_sheets = math.ceil(len(coded)/MAXPERSHEET)
    for s in range(n_sheets):
        chunk = coded[s*MAXPERSHEET:(s+1)*MAXPERSHEET]
        nm = f"{folder}{'' if n_sheets==1 else '-'+str(s+1)}.jpg"
        out = make_sheet(chunk, prefix, cols, nm)
        print(f"{folder}: Bogen {s+1}/{n_sheets} -> {out} ({len(chunk)} Bilder)")

json.dump(index, open(os.path.join(SRC,"_index.json"),"w"), indent=0, ensure_ascii=False)
print(f"\nIndex: {len(index)} Codes -> {SRC}/_index.json")
