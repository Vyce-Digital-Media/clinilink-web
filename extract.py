import re
import html

with open('content.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Find all code blocks
blocks = re.findall(r'<code[^>]*>(.*?)</code>', content, re.DOTALL)
print(f"Found {len(blocks)} code blocks")

for i, b in enumerate(blocks):
    decoded = html.unescape(b)
    # The first block might be npm install command, second might be the component code
    print(f"--- Block {i} ---")
    print(decoded[:200] + "...")
    
    with open(f'block_{i}.tsx', 'w', encoding='utf-8') as out:
        out.write(decoded)
