#!/usr/bin/env python3
"""Baut eine beschriftete Montage aus einer Liste von Codes (aus _index.json)."""
import sys, os, json, math
from PIL import Image, ImageDraw, ImageFont

SRC="_quelle-fotos"
idx=json.load(open(os.path.join(SRC,"_index.json")))
codes=sys.argv[2:]
out=sys.argv[1]
cols=5; thumb=300; LABEL_H=26; PAD=6

def font(sz):
    for p in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf","/System/Library/Fonts/Helvetica.ttc"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p,sz)
            except: pass
    return ImageFont.load_default()
F=font(18)

rows=math.ceil(len(codes)/cols)
cw=thumb+PAD; ch=thumb+LABEL_H+PAD
W=cols*cw+PAD; H=rows*ch+PAD
cv=Image.new("RGB",(W,H),(245,243,238)); d=ImageDraw.Draw(cv)
for i,code in enumerate(codes):
    path=idx.get(code)
    if not path or not os.path.exists(path):
        print("fehlt:",code); continue
    r,c=divmod(i,cols); x=PAD+c*cw; y=PAD+r*ch
    im=Image.open(path).convert("RGB"); im.thumbnail((thumb,thumb))
    tw,th=im.size; ox=x+(thumb-tw)//2; oy=y+LABEL_H+(thumb-th)//2
    d.rectangle([x,y,x+thumb,y+LABEL_H],fill=(30,30,30))
    d.text((x+5,y+3),code,fill=(255,255,255),font=F)
    cv.paste(im,(ox,oy))
cv.save(out,quality=85)
print("gespeichert:",out)
