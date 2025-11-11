# Favicon Generation Instructions

## Required Favicon Files

You need to generate the following favicon files from your logo (LavanyaInfotechLogo.png):

### Required Files:
1. **favicon.ico** (16x16 and 32x32 multi-size ICO file) - Place in root directory
2. **favicon-16x16.png** - 16x16 PNG
3. **favicon-32x32.png** - 32x32 PNG
4. **apple-touch-icon.png** - 180x180 PNG (for iOS devices)
5. **android-chrome-192x192.png** - 192x192 PNG (for Android)
6. **android-chrome-512x512.png** - 512x512 PNG (for Android)

## How to Generate Favicons

### Option 1: Online Tools (Recommended - Fast & Easy)
Use one of these free online favicon generators:

1. **Favicon.io** (https://favicon.io/)
   - Upload your logo image
   - Download the generated package
   - Extract all files to this directory

2. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - Upload your logo
   - Customize settings for different platforms
   - Download and extract to this directory

### Option 2: Using ImageMagick (Command Line)
If you have ImageMagick installed:

```bash
# From the images directory
cd ../images

# Generate 16x16
magick LavanyaInfotechLogo.png -resize 16x16 ../assets/icons/favicon-16x16.png

# Generate 32x32
magick LavanyaInfotechLogo.png -resize 32x32 ../assets/icons/favicon-32x32.png

# Generate Apple Touch Icon (180x180)
magick LavanyaInfotechLogo.png -resize 180x180 ../assets/icons/apple-touch-icon.png

# Generate Android Icons
magick LavanyaInfotechLogo.png -resize 192x192 ../assets/icons/android-chrome-192x192.png
magick LavanyaInfotechLogo.png -resize 512x512 ../assets/icons/android-chrome-512x512.png

# Generate ICO file (combines 16x16 and 32x32)
magick LavanyaInfotechLogo.png -resize 16x16 -colors 256 favicon-16.png
magick LavanyaInfotechLogo.png -resize 32x32 -colors 256 favicon-32.png
magick favicon-16.png favicon-32.png ../../favicon.ico
rm favicon-16.png favicon-32.png
```

### Option 3: Using Photoshop/GIMP
1. Open LavanyaInfotechLogo.png
2. For each size:
   - Image → Image Size → Set width and height
   - Export as PNG
   - Save with appropriate filename
3. For favicon.ico, use an ICO converter or plugin

## Current Status

⚠️ **PLACEHOLDER FILES NEEDED**

The index.html file references these favicon files, but they need to be generated from your logo.

## Quick Action

**Fastest solution:**
1. Go to https://favicon.io/favicon-converter/
2. Upload `images/LavanyaInfotechLogo.png`
3. Click "Download"
4. Extract all files from the ZIP to this directory (`assets/icons/`)
5. Move `favicon.ico` to the root directory of the project

## Verification

After generating favicons, verify by:
1. Opening index.html in a browser
2. Check browser tab shows your favicon
3. Check mobile bookmark appearance
4. Use https://realfavicongenerator.net/favicon_checker to validate

## Notes

- Ensure your source logo has a transparent background for best results
- Use a square version of your logo if possible
- The favicon should be simple and recognizable at small sizes
- Test on multiple browsers (Chrome, Firefox, Safari, Edge)
