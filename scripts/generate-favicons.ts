import sharp from 'sharp';
import { writeFileSync } from 'fs';
import { join } from 'path';

const logoPath = join(process.cwd(), 'public', '1031-exchange-of-san-diego-ca-logo.png');
const faviconDir = join(process.cwd(), 'public', 'favicon');

const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 },
];

async function generateFavicons() {
  try {
    console.log('Generating favicons from logo...');
    
    // Generate PNG favicons
    for (const { name, size } of sizes) {
      await sharp(logoPath)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png()
        .toFile(join(faviconDir, name));
      console.log(`✓ Generated ${name}`);
    }
    
    // Generate favicon.ico (multi-size ICO)
    // Create a 32x32 version for the ICO
    const icoBuffer = await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toBuffer();
    
    // For ICO, we'll use PNG format (modern browsers support PNG in .ico files)
    writeFileSync(join(faviconDir, 'favicon.ico'), icoBuffer);
    console.log('✓ Generated favicon.ico');
    
    console.log('All favicons generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();

