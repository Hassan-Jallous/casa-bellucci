# Berechnet size-adjust + ascent/descent/line-gap-override fuer einen Fallback-System-
# Font, sodass er die Metriken der Webfont nachahmt -> Font-Swap ohne Layout-Shift.
# Wie next/font. Nutzt fontTools.
from fontTools.ttLib import TTFont
import sys

# Bekannte Fallback-Metriken (unitsPerEm, ascent, descent, avg lowercase advance)
FALLBACKS = {
    "Arial":  {"upm":2048,"asc":1854,"desc":434,"avg":1037},   # Arial/Helvetica
    "Times":  {"upm":2048,"asc":1825,"desc":443,"avg":924},     # Times New Roman / serif
    "Georgia":{"upm":2048,"asc":1878,"desc":449,"avg":1031},
}

def avg_advance(font):
    # Durchschnittliche Advance-Breite der Kleinbuchstaben a-z
    cmap = font.getBestCmap(); hmtx = font["hmtx"]
    ws=[]
    for c in "abcdefghijklmnopqrstuvwxyz":
        g = cmap.get(ord(c))
        if g: ws.append(hmtx[g][0])
    return sum(ws)/len(ws) if ws else 0

def calc(path, fallback_name):
    f = TTFont(path)
    upm = f["head"].unitsPerEm
    # Ascent/Descent: bevorzugt OS/2 typo, sonst hhea
    os2 = f["OS/2"]; hhea = f["hhea"]
    asc = os2.sTypoAscender; desc = abs(os2.sTypoDescender); gap = os2.sTypoLineGap
    web_avg = avg_advance(f)
    fb = FALLBACKS[fallback_name]
    fb_avg_ratio = fb["avg"]/fb["upm"]
    web_avg_ratio = web_avg/upm
    size_adjust = web_avg_ratio / fb_avg_ratio
    # Overrides werden relativ zur ANGEPASSTEN em (also durch size_adjust teilen)
    asc_o = (asc/upm) / size_adjust
    desc_o = (desc/upm) / size_adjust
    gap_o = (gap/upm) / size_adjust
    return size_adjust, asc_o, desc_o, gap_o

for fam, path, fb in [
    ("Playfair Display", "public/fonts/playfair-display-500-normal.woff2", "Times"),
    ("Montserrat", "public/fonts/montserrat-400-normal.woff2", "Arial"),
]:
    sa, a, d, g = calc(path, fb)
    print(f'@font-face{{font-family:"{fam} Fallback";src:local("{fb if fb!="Times" else "Times New Roman"}"),local("{ "Georgia" if fb=="Times" else "Helvetica Neue"}");size-adjust:{sa*100:.2f}%;ascent-override:{a*100:.2f}%;descent-override:{d*100:.2f}%;line-gap-override:{g*100:.2f}%;}}')
