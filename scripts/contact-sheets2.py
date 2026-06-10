#!/usr/bin/env python3
"""Kompakte Uebersichtsboegen fuer grosse Ordner (zip-food, wine)."""
import os, json, re, math
from PIL import Image, ImageDraw, ImageFont

SRC = "_quelle-fotos"
OUTDIR = os.path.join(SRC, "_kontakt")
os.makedirs(OUTDIR, exist_ok=True)

def font(sz):
    for p in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf",
              "/System/Library/Fonts/Helvetica.ttc"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p, sz)
            except Exception: pass
    return ImageFont.load_default()

def num_of(name):
    m = re.search(r'-(\d+)\.[a-zA-Z]+$', name)
    return int(m.group(1)) if m else 0

# (Ordner, Prefix, Spalten, Thumb, max/Bogen)
GROUPS = [
    ("wine",     "W",  5, 320, 25),
    ("zip-food", "ZF", 8, 210, 96),
]

index_path = os.path.join(SRC, "_index.json")
index = json.load(open(index_path)) if os.path.exists(index_path) else {}

def make_sheet(files, cols, thumb, sheet_name):
    LABEL_H = max(20, thumb//14); PAD=6
    F = font(max(14, thumb//16))
    cell_w = thumb + PAD; cell_h = thumb + LABEL_H + PAD
    rows = math.ceil(len(files)/cols)
    W = cols*cell_w + PAD; H = rows*cell_h + PAD
    canvas = Image.new("RGB",(W,H),(245,243,238)); draw=ImageDraw.Draw(canvas)
    for i,(code,path) in enumerate(files):
        r,c = divmod(i,cols); x=PAD+c*cell_w; y=PAD+r*cell_h
        try:
            im=Image.open(path).convert("RGB"); im.thumbnail((thumb,thumb))
        except Exception: continue
        tw,th=im.size; ox=x+(thumb-tw)//2; oy=y+LABEL_H+(thumb-th)//2
        draw.rectangle([x,y,x+thumb,y+LABEL_H],fill=(30,30,30))
        draw.text((x+4,y+2),code,fill=(255,255,255),font=F)
        canvas.paste(im,(ox,oy))
    out=os.path.join(OUTDIR,sheet_name); canvas.save(out,quality=80)
    return out

for folder,prefix,cols,thumb,maxsheet in GROUPS:
    p=os.path.join(SRC,folder)
    if not os.path.isdir(p): continue
    files=[f for f in os.listdir(p) if f.lower().endswith(('.jpg','.jpeg','.png'))]
    files.sort(key=num_of)
    coded=[]
    for f in files:
        code=f"{prefix}-{num_of(f)}"; full=os.path.join(p,f)
        index[code]=full; coded.append((code,full))
    n=math.ceil(len(coded)/maxsheet)
    for s in range(n):
        chunk=coded[s*maxsheet:(s+1)*maxsheet]
        nm=f"{folder}{'' if n==1 else '-'+str(s+1)}.jpg"
        out=make_sheet(chunk,cols,thumb,nm)
        print(f"{folder}: Bogen {s+1}/{n} -> {out} ({len(chunk)})")

json.dump(index,open(index_path,"w"),indent=0,ensure_ascii=False)
print("Index aktualisiert:",len(index),"Codes")
