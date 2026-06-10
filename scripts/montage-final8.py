#!/usr/bin/env python3
import os, math
from PIL import Image, ImageDraw, ImageFont
SRC="_quelle-fotos/bbg-food-orig"; OUT="_quelle-fotos/_kontakt/_FINAL8.jpg"
# (label, fav-num)
ITEMS=[("1 Aperitivo (Cocktail)","225"),("2 Pasta della Casa","152"),
       ("3 Antipasti / Tafel","082"),("4 Secondi (Fleisch & Wein)","194"),
       ("5 Burrata / Insalata","058"),("6 Dolce Vita (Bowl)","244"),
       ("7 Dolce (Dessert)","231"),("8 Cantina (Wein)","067")]
def font(sz):
    for p in ["/System/Library/Fonts/Supplemental/Arial Bold.ttf","/System/Library/Fonts/Helvetica.ttc"]:
        if os.path.exists(p):
            try: return ImageFont.truetype(p,sz)
            except: pass
    return ImageFont.load_default()
F=font(26)
COLS=4; THUMB=460; LBL=38; PAD=8
rows=math.ceil(len(ITEMS)/COLS); cw=THUMB+PAD; ch=THUMB+LBL+PAD
W=COLS*cw+PAD; H=rows*ch+PAD
cv=Image.new("RGB",(W,H),(245,243,238)); d=ImageDraw.Draw(cv)
for i,(label,num) in enumerate(ITEMS):
    fp=os.path.join(SRC,"fav-%s.jpg"%num)
    r,c=divmod(i,COLS); x=PAD+c*cw; y=PAD+r*ch
    d.rectangle([x,y,x+THUMB,y+LBL],fill=(20,20,20))
    d.text((x+8,y+7),label,fill=(255,210,120),font=F)
    if os.path.exists(fp):
        im=Image.open(fp).convert("RGB"); im.thumbnail((THUMB,THUMB))
        tw,th=im.size; ox=x+(THUMB-tw)//2; oy=y+LBL+(THUMB-th)//2
        cv.paste(im,(ox,oy))
cv.save(OUT,quality=90); print("gespeichert:",OUT,cv.size)
