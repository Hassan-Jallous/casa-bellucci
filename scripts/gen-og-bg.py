#!/usr/bin/env python3
"""OG-Hintergrund (Landscape 16:9) im Stil des Mobile-Heros:
sonnige Sommerterrasse, Aperol-Spritz, Dolce-Vita-Stimmung.
Referenzen: lp-terr-hell-1 + lp-spritz. Modell: gemini-3-pro-image-preview."""
import os
from google import genai
from google.genai import types
from PIL import Image

API_KEY = os.environ["GEMINI_API_KEY"]
MODEL = "gemini-3-pro-image-preview"
N = 3
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
IMG = os.path.join(ROOT, "public", "images")
OUT = os.path.join(IMG, "_og-candidates")
os.makedirs(OUT, exist_ok=True)

PROMPT = (
    "Create ONE photorealistic WIDE LANDSCAPE 16:9 photograph of an elegant Italian "
    "restaurant SUMMER TERRACE in Berlin, exact same real location and style as the "
    "FIRST reference image: white-clothed bistro tables, dark woven metal bistro "
    "chairs with brass legs, small gold/brass table lamps, lush green hanging plants "
    "and white blossom branches, a large glass facade reflecting green trees, warm "
    "bright midday summer sunlight, airy Dolce Vita mood. Slightly off-centre in the "
    "foreground an inviting Aperol-Spritz aperitivo in a tall wine glass with ice and "
    "an orange slice (match the SECOND reference image), with a little antipasti plate. "
    "Subtly suggest a relaxed happy atmosphere with one or two guests strongly blurred "
    "in the background, no recognisable faces. Leave calmer, less busy space toward the "
    "centre so an overlaid logo stays readable. Natural depth of field, photorealistic "
    "editorial restaurant photography, warm and bright, no text, no logo, no watermark."
)


def main():
    client = genai.Client(api_key=API_KEY)
    terrace = Image.open(os.path.join(IMG, "lp-terr-hell-1.jpg"))
    spritz = Image.open(os.path.join(IMG, "lp-spritz.jpg"))
    for i in range(1, N + 1):
        try:
            resp = client.models.generate_content(
                model=MODEL,
                contents=[PROMPT, terrace, spritz],
                config=types.GenerateContentConfig(
                    response_modalities=["TEXT", "IMAGE"],
                    image_config=types.ImageConfig(aspect_ratio="16:9"),
                ),
            )
            for part in resp.parts:
                if getattr(part, "inline_data", None):
                    p = os.path.join(OUT, f"og-cand-{i}.jpg")
                    part.as_image().save(p)
                    print("->", p)
        except Exception as e:
            print(f"[{i}] FEHLER:", str(e)[:200])
    print("fertig")


if __name__ == "__main__":
    main()
