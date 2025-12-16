import re

# Read the file
with open('app/data/products.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove pricing sections from fullDescription
content = re.sub(r'________________________________________\n💰 GIÁ BÁN / PRICING[\s\S]*?________________________________________', '________________________________________', content)

# Remove pricing sections from fullDescriptionEn
content = re.sub(r'________________________________________\n💰 PRICING[\s\S]*?________________________________________', '________________________________________', content)

# Write back
with open('app/data/products.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("Pricing sections removed successfully")