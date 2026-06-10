#!/usr/bin/env python3
"""Kontaktboegen aus bbg-food-thumbs mit grossen Nummern-Labels."""
import os, math, glob, re
from PIL import Image, ImageDraw, ImageFont
SRC="_quelle-fotos/bbg-food-thumbs"
OUT="_quelle-fotos/_kontakt"
files=sorted(glob.glob(os.path.join(SRC,"bbg-*.jpg")), key=lambda p:int(re.search(r'(\d+)',os.path.basename(p)).group(1)))
def font(sz):
    for p in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf","/System/Library/Fonts/Helvetica.ttc"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p,sz)
            except: pass
    return ImageFont.load_default()
F=font(30)
COLS=6; THUMB=230; LBL=34; PAD=5; PER=54   # 6x9 pro Bogen
chunks=[files[i:i+PER] for i in range(0,len(files),PER)]
for bi,chunk in enumerate(chunks,1):
    rows=math.ceil(len(chunk)/COLS)
    cw=THUMB+PAD; ch=THUMB+LBL+PAD
    W=COLS*cw+PAD; H=rows*ch+PAD
    cv=Image.new("RGB",(W,H),(245,243,238)); d=ImageDraw.Draw(cv)
    for i,fp in enumerate(chunk):
        num=re.search(r'(\d+)',os.path.basename(fp)).group(1)
        r,c=divmod(i,COLS); x=PAD+c*cw; y=PAD+r*ch
        try:
            im=Image.open(fp).convert("RGB"); im.thumbnail((THUMB,THUMB))
        except: continue
        tw,th=im.size; ox=x+(THUMB-tw)//2; oy=y+LBL+(THUMB-th)//2
        d.rectangle([x,y,x+THUMB,y+LBL],fill=(20,20,20))
        d.text((x+6,y+3),"#"+str(int(num)),fill=(255,210,120),font=F)
        cv.paste(im,(ox,oy))
    out=os.path.join(OUT,f"_BBG-{bi}.jpg")
    cv.save(out,quality=84)
    print("gespeichert:",out,cv.size,"(",len(chunk),"bilder )")
