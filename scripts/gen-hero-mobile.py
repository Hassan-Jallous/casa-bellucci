#!/usr/bin/env python3
"""
Generiert ein neues MOBILE-Hero-Bild (9:16 Hochformat) fuer Casa Bellucci.
Inhalt (Adriano-Feedback): volle, sonnige Sommerterrasse, Aperol-Spritz im
Vordergrund, lockere Dolce-Vita-Stimmung, angedeutete Gaeste (unscharf, keine
erkennbaren Gesichter -> DSGVO). Stil exakt wie die echten Terrassenfotos.
Referenzen: lp-terr-hell-1 (helle Terrasse) + lp-spritz (Aperitivo).
Modell: gemini-3-pro-image-preview (Qualitaet).
"""
import os
from google import genai
from google.genai import types
from PIL import Image

API_KEY = os.environ["GEMINI_API_KEY"]
MODEL = "gemini-3-pro-image-preview"
N_CANDIDATES = 4

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG_DIR = os.path.join(ROOT, "public", "images")
REF_TERRACE = os.path.join(IMG_DIR, "lp-terr-hell-1.jpg")
REF_SPRITZ = os.path.join(IMG_DIR, "lp-spritz.jpg")
OUT_DIR = os.path.join(IMG_DIR, "_hero-candidates")
os.makedirs(OUT_DIR, exist_ok=True)

PROMPT = (
    "Create ONE photorealistic vertical 9:16 hero photograph of an elegant Italian "
    "restaurant SUMMER TERRACE in Berlin, in the exact same real location, style, "
    "furniture and colour grade as the FIRST reference image: white-clothed bistro "
    "tables, dark woven metal bistro chairs with brass legs, little gold/brass table "
    "lamps with cream shades, lush green hanging plants and small white blossom "
    "branches, a large glass facade reflecting green trees, warm bright midday "
    "summer sunlight, airy Dolce Vita mood. "
    "In the FOREGROUND, lower third, place an inviting Aperol-Spritz-style aperitivo "
    "in a tall wine glass with ice and a slice of orange (match the drink styling and "
    "lighting of the SECOND reference image), next to it a little antipasti plate, on "
    "a white tablecloth. "
    "Subtly suggest a relaxed, happy summer atmosphere with one or two guests in the "
    "soft-focus background, turned away or strongly blurred so NO recognisable faces "
    "are visible. "
    "Vertical portrait composition for a phone screen: the upper area shows the sunny "
    "terrace receding into depth, the lower area the aperitivo table. Natural depth of "
    "field, photorealistic, editorial restaurant photography, warm and bright, no "
    "text, no logo overlays, no watermark, no flat colour blocks or banners."
)


def main():
    client = genai.Client(api_key=API_KEY)
    terrace = Image.open(REF_TERRACE)
    spritz = Image.open(REF_SPRITZ)
    print(f"Refs: {REF_TERRACE} + {REF_SPRITZ}")
    print(f"Generiere {N_CANDIDATES} Kandidaten (9:16) mit {MODEL} ...\n")

    saved = []
    for i in range(1, N_CANDIDATES + 1):
        try:
            response = client.models.generate_content(
                model=MODEL,
                contents=[PROMPT, terrace, spritz],
                config=types.GenerateContentConfig(
                    response_modalities=["TEXT", "IMAGE"],
                    image_config=types.ImageConfig(aspect_ratio="9:16"),
                ),
            )
            wrote = False
            for part in response.parts:
                if getattr(part, "text", None):
                    print(f"[cand {i}] model: {part.text[:120]}")
                elif getattr(part, "inline_data", None):
                    out = os.path.join(OUT_DIR, f"mobile-cand-{i}.jpg")
                    part.as_image().save(out)
                    saved.append(out)
                    wrote = True
                    print(f"[cand {i}] -> {out}")
            if not wrote:
                print(f"[cand {i}] KEIN Bild erhalten.")
        except Exception as e:
            print(f"[cand {i}] FEHLER: {str(e)[:240]}")

    print(f"\nFertig. {len(saved)} Kandidaten in {OUT_DIR}")


if __name__ == "__main__":
    main()
