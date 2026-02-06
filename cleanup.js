const fs = require('fs');
const path = require('path');

const image0 = 'public/photos/image0';
const image1 = 'public/photos/image1';

const keep0 = [
    "IMG_2860.webp", "IMG_2971.webp", "IMG_2651.webp", "IMG_2549.webp", "IMG_2330.webp", "IMG_2254.webp"
];

const keep1 = [
    "DSC00005.webp", "DSC00067.webp", "DSCF6838.webp", "DSC00268.webp", "DSC00292.webp", "DSC00287.webp", "DSC00977.webp",
    "image_2026-02-06_232856492.webp",
    "1 (1).webp", "1 (2).webp", "1 (3).webp", "1 (4).webp", "1 (5).webp",
    "DSC01288.webp"
];

function cleanDir(dir, keep) {
    if (!fs.existsSync(dir)) {
        console.log(`Directory not found: ${dir}`);
        return;
    }
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        if (!keep.includes(file)) {
            try {
                fs.unlinkSync(path.join(dir, file));
                console.log(`Deleted ${file}`);
            } catch (e) {
                console.error(`Failed to delete ${file}: ${e.message}`);
            }
        }
    });
}

cleanDir(image0, keep0);
cleanDir(image1, keep1);
console.log('Done');
