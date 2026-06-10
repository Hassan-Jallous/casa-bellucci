#!/usr/bin/env python3
import os, math, sys, re
from PIL import Image, ImageDraw, ImageFont
SRC="_quelle-fotos/bbg-food-thumbs"; OUT="_quelle-fotos/_kontakt/_BBG-KANDIDATEN.jpg"
nums=[int(n) for n in sys.argv[1:]]
def font(sz):
    for p in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf","/System/Library/Fonts/Helvetica.ttc"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p,sz)
            except: pass
    return ImageFont.load_default()
F=font(34)
COLS=4; THUMB=400; LBL=40; PAD=8
rows=math.ceil(len(nums)/COLS); cw=THUMB+PAD; ch=THUMB+LBL+PAD
W=COLS*cw+PAD; H=rows*ch+PAD
cv=Image.new("RGB",(W,H),(245,243,238)); d=ImageDraw.Draw(cv)
for i,num in enumerate(nums):
    fp=os.path.join(SRC,"bbg-%03d.jpg"%num)
    r,c=divmod(i,COLS); x=PAD+c*cw; y=PAD+r*ch
    d.rectangle([x,y,x+THUMB,y+LBL],fill=(20,20,20))
    d.text((x+8,y+4),"#"+str(num),fill=(255,210,120),font=F)
    if os.path.exists(fp):
        im=Image.open(fp).convert("RGB"); im.thumbnail((THUMB,THUMB))
        tw,th=im.size; ox=x+(THUMB-tw)//2; oy=y+LBL+(THUMB-th)//2
        cv.paste(im,(ox,oy))
    else:
        d.text((x+8,y+LBL+8),"(fehlt)",fill=(200,0,0),font=F)
cv.save(OUT,quality=88); print("gespeichert:",OUT,cv.size)
