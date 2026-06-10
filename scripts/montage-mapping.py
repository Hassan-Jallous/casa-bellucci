#!/usr/bin/env python3
"""Baut eine Vorschau-Montage 'Slot -> Foto' mit lesbaren Slot-Labels."""
import os, json, math
from PIL import Image, ImageDraw, ImageFont

SRC="_quelle-fotos"
idx=json.load(open(os.path.join(SRC,"_index.json")))

# (Slot-Label, Code)  -- Reihenfolge = Anzeige
MAPPING=[
 ("HERO Desktop","WS-3"),
 ("HERO Mobile","WS-9"),
 ("Terrasse-Sektion","ED-17"),
 ("Terrasse allg.","WS-17"),
 ("Sala / Innenraum","WS-32"),
 ("Menue Fruehstueck","F-2"),
 ("Menue Mittag (Pasta)","ZF-120"),
 ("Menue Abend (Platte)","ZF-218"),
 ("Menue Wein","W-14"),
 ("Sizilianisch-Hero","ED-15"),
 ("Galerie 1 Aperitivo","F-1"),
 ("Galerie 2 Pasta","ZF-113"),
 ("Galerie 3 Sala","WS-34"),
 ("Galerie 4 Dolce Vita","F-12"),
 ("Galerie 5 Antipasti","ZF-142"),
 ("Galerie 6 Tavolo","WS-19"),
 ("Galerie 7 Crudo di Mare","ZF-205"),
 ("Galerie 8 Cantina","ZF-217"),
]

cols=3; thumb=400; LABEL_H=40; PAD=10
def font(sz):
    for p in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf","/System/Library/Fonts/Helvetica.ttc"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p,sz)
            except: pass
    return ImageFont.load_default()
F=font(20); Fs=font(15)

rows=math.ceil(len(MAPPING)/cols)
cw=thumb+PAD; ch=thumb+LABEL_H+PAD
W=cols*cw+PAD; H=rows*ch+PAD
cv=Image.new("RGB",(W,H),(250,248,244)); d=ImageDraw.Draw(cv)
for i,(label,code) in enumerate(MAPPING):
    path=idx.get(code)
    r,c=divmod(i,cols); x=PAD+c*cw; y=PAD+r*ch
    d.rectangle([x,y,x+thumb,y+LABEL_H],fill=(20,20,20))
    d.text((x+8,y+4),label,fill=(255,210,120),font=F)
    d.text((x+8,y+23),code,fill=(180,180,180),font=Fs)
    if path and os.path.exists(path):
        im=Image.open(path).convert("RGB"); im.thumbnail((thumb,thumb))
        tw,th=im.size; ox=x+(thumb-tw)//2; oy=y+LABEL_H+(thumb-th)//2
        cv.paste(im,(ox,oy))
out=os.path.join(SRC,"_kontakt","_MAPPING.jpg")
cv.save(out,quality=86)
print("gespeichert:",out, cv.size)
