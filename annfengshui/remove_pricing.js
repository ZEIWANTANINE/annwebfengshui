const fs = require('fs');

let content = fs.readFileSync('app/data/products.ts', 'utf8');

// Remove pricing sections from fullDescription
content = content.replace(/________________________________________\n💰 GIÁ BÁN \/ PRICING[\s\S]*?________________________________________/g, '________________________________________');

// Remove pricing sections from fullDescriptionEn
content = content.replace(/________________________________________\n💰 PRICING[\s\S]*?________________________________________/g, '________________________________________');

fs.writeFileSync('app/data/products.ts', content);
console.log('Pricing sections removed successfully');