import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const publicDir = './public';
const files = fs.readdirSync(publicDir);

for (const file of files) {
  const filePath = path.join(publicDir, file);
  const ext = path.extname(file).toLowerCase();

  if (['.png', '.jpg', '.jpeg'].includes(ext)) {
    console.log(`Optimizing ${file}...`);
    const tempPath = filePath + '.tmp';

    try {
      let pipeline = sharp(filePath);

      pipeline = ext === '.png' ? pipeline.png({ quality: 80, compressionLevel: 9 }) : pipeline.jpeg({ quality: 80 });

      await pipeline.toFile(tempPath);
      fs.renameSync(tempPath, filePath);
      console.log(`Optimized ${file} successfully.`);
    } catch (error) {
      console.error(`Failed to optimize ${file}:`, error);
      if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    }
  }
}
