const fs = require('fs');
const path = require('path');

const image0 = 'public/photos/image0';
const image1 = 'public/photos/image1';

// Definitive Keep Lists
const keep0 = [
    "IMG_2860.webp",
    "IMG_2971.webp",
    "IMG_2651.webp",
    "IMG_2549.webp",
    "IMG_2330.webp",
    "IMG_2254.webp",
    "IMG_2728.webp"
];

const keep1 = [
    "DSC00005.webp",
    "DSC00067.webp",
    "DSCF6838.webp",
    "DSC00268.webp",
    "DSC00292.webp",
    "DSC00287.webp",
    "DSC00977.webp",
    "image_2026-02-06_232856492.webp",
    "1 (1).webp",
    "1 (2).webp",
    "1 (3).webp",
    "1 (4).webp",
    "1 (5).webp",
    "DSC01288.webp"
];

function cleanDir(dir, keepList) {
    const fullPath = path.resolve(dir);
    if (!fs.existsSync(fullPath)) {
        console.log(`Directory not found: ${fullPath}`);
        return;
    }

    console.log(`Cleaning ${dir}...`);
    const files = fs.readdirSync(fullPath);
    let deletedCount = 0;

    files.forEach(file => {
        if (!keepList.includes(file)) {
            try {
                fs.unlinkSync(path.join(fullPath, file));
                deletedCount++;
            } catch (e) {
                console.error(`FAILED to delete ${file}: ${e.message}`);
            }
        }
    });
    console.log(`Deleted ${deletedCount} files from ${dir}`);
}

cleanDir(image0, keep0);
cleanDir(image1, keep1);
console.log('Cleanup complete.');
