#!/usr/bin/env python3
"""
Generiert das neue Desktop-Hero-Bild fuer Casa Bellucci.
Image-Editing: Original-Terrasse als Input, linke ~40% wird ruhig & cremig,
rechte Seite (Pflanzen/Stuehle/Tische/Deko) bleibt erhalten. EIN homogenes Foto.
Modell: Gemini 3.1 Flash Image (User-Wunsch).
"""
import os
import sys
from google import genai
from google.genai import types
from PIL import Image

API_KEY = os.environ["GEMINI_API_KEY"]
MODEL = "gemini-3.1-flash-image-preview"  # Flash, wie vom User gewuenscht
N_CANDIDATES = 4

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INPUT_IMG = os.path.join(ROOT, "images", "hero-summer-desktop-original.jpg")
OUT_DIR = os.path.join(ROOT, "images", "_hero-candidates")
os.makedirs(OUT_DIR, exist_ok=True)

PROMPT = (
    "Edit this photograph of a lush green Sicilian restaurant terrace. "
    "KEEP the entire RIGHT HALF exactly as it is - the potted plants, hanging "
    "greenery, woven bistro chairs, white-clothed tables with glassware, colorful "
    "cushions, cherry-blossom branches and the reflective glass facade: preserve "
    "their detail, lighting and warm summer atmosphere. "
    "Transform the LEFT ~40 percent of the frame into a very calm, uncluttered, "
    "softly out-of-focus area: a smooth, airy, cream-toned terrace background "
    "(soft natural sunlight on a pale wall and bright warm bokeh foliage) with lots "
    "of empty negative space, so headline text can sit there comfortably. "
    "The transition from the calm left to the detailed right must be smooth, gradual "
    "and completely natural - this must read as ONE single cohesive, photorealistic "
    "photograph. Do NOT split the image in half, do NOT add any flat colour block, "
    "banner, gradient overlay or solid panel, and absolutely no hard seam or vertical "
    "divider. Keep one consistent perspective, depth of field, colour grade and "
    "natural daylight across the whole frame. Warm, bright, elegant editorial mood. "
    "16:9 wide landscape, high resolution, photorealistic."
)


def main():
    client = genai.Client(api_key=API_KEY)

    # Modell-Verifikation (zeigt, ob der Flash-Modellname existiert)
    try:
        available = [m.name for m in client.models.list()]
        match = [m for m in available if "image" in m.lower()]
        print("Verfuegbare Image-Modelle:")
        for m in match:
            print("  ", m)
        if not any(MODEL in m for m in available):
            print(f"\nWARNUNG: '{MODEL}' nicht in der Liste. Pruefe Namen oben.\n")
    except Exception as e:
        print("Modell-Liste nicht abrufbar:", str(e)[:160])

    img = Image.open(INPUT_IMG)
    print(f"\nInput: {INPUT_IMG}  ({img.width}x{img.height})")
    print(f"Generiere {N_CANDIDATES} Kandidaten mit {MODEL} ...\n")

    saved = []
    for i in range(1, N_CANDIDATES + 1):
        try:
            response = client.models.generate_content(
                model=MODEL,
                contents=[PROMPT, img],
                config=types.GenerateContentConfig(
                    response_modalities=["TEXT", "IMAGE"],
                    image_config=types.ImageConfig(aspect_ratio="16:9"),
                ),
            )
            wrote = False
            for part in response.parts:
                if getattr(part, "text", None):
                    print(f"[cand {i}] model says: {part.text[:120]}")
                elif getattr(part, "inline_data", None):
                    out = os.path.join(OUT_DIR, f"hero-cand-{i}.jpg")
                    part.as_image().save(out)
                    saved.append(out)
                    wrote = True
                    print(f"[cand {i}] gespeichert -> {out}")
            if not wrote:
                print(f"[cand {i}] KEIN Bild erhalten.")
        except Exception as e:
            print(f"[cand {i}] FEHLER: {str(e)[:200]}")

    print(f"\nFertig. {len(saved)} Kandidaten in {OUT_DIR}")
    for s in saved:
        print("  ", s)


if __name__ == "__main__":
    main()
