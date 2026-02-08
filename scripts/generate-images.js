
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(process.cwd(), 'public', 'images');
const DATA_FILE = path.join(process.cwd(), 'app', 'data', 'images.json');

function scanImages() {
    const categories = ['aodai', 'office'];
    const images = [];
    let idCounter = 1;

    categories.forEach(category => {
        const categoryPath = path.join(IMAGES_DIR, category);
        if (!fs.existsSync(categoryPath)) {
            console.warn(`Warning: Category folder ${category} not found.`);
            return;
        }

        const files = fs.readdirSync(categoryPath);
        files.forEach(file => {
            if (file.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
                images.push({
                    id: idCounter++,
                    src: `/images/${category}/${file}`,
                    category: category,
                    title: formatTitle(file)
                });
            }
        });
    });

    // Write to JSON file
    fs.writeFileSync(DATA_FILE, JSON.stringify(images, null, 2));
    console.log(`Successfully generated images.json with ${images.length} images.`);
}

function formatTitle(filename) {
    // Convert "ao-dai-dep.jpg" to "Ao Dai Dep"
    const name = path.parse(filename).name;
    return name
        .split(/[-_]/)
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

scanImages();
