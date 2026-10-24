from pathlib import Path

replacements = {
    "src/components/Logo.js": [
        ('alt="nextvial"', 'alt="pepdrive365"'),
        (
            "      {showText && (\n        <span className=\"font-Gibson font-bold text-2xl tracking-tight flex items-center\">\n          <span style={{ color: 'var(--clr-black)' }}>next</span>\n          <span style={{ \n            background: 'var(--brand-gradient)',\n            WebkitBackgroundClip: 'text',\n            WebkitTextFillColor: 'transparent',\n            marginLeft: '2px'\n          }}>vial</span>\n        </span>\n      )}",
            "      {showText && (\n        <span className=\"font-Gibson font-bold text-2xl tracking-tight flex items-center\" style={{ color: 'var(--clr-main)' }}>\n          pepdrive365\n        </span>\n      )}"
        ),
    ],
    "src/common/navbar/Navbar2.jsx": [
        ('alt="nextvial"', 'alt="pepdrive365"'),
    ],
    "src/common/footer/Footer.jsx": [
        ('<p>© nextvial 2024 All Rights Reserved</p>', '<p>© pepdrive365 2024 All Rights Reserved</p>'),
    ],
    "public/index.html": [
        ('<meta name="description" content="nextvial" />', '<meta name="description" content="pepdrive365" />'),
        ('<title>nextvial</title>', '<title>pepdrive365</title>'),
        ('<noscript>nextvial</noscript>', '<noscript>pepdrive365</noscript>'),
    ],
    "public/manifest.json": [
        ('"short_name": "React App",', '"short_name": "pepdrive365",'),
        ('"name": "Create React App Sample",', '"name": "pepdrive365",'),
    ],
    "package.json": [
        ('"name": "nextvial",', '"name": "pepdrive365",'),
    ],
    "package-lock.json": [
        ('"name": "nextvial",', '"name": "pepdrive365",'),
    ],
    "tailwind.config.js": [
        ('      backgroundImage: {\n        "brand-gradient": "linear-gradient(135deg, #1C2340 0%, #7a82a5 100%)",\n      },',
         '      backgroundImage: {\n        "brand-gradient": "none",\n      },'),
    ],
    "src/index.css": [
        ('  --brand-gradient: linear-gradient(135deg, #1C2340 0%, #7a82a5 100%);', '  --brand-gradient: var(--clr-main);'),
        ('  background: var(--brand-gradient);', '  background: var(--clr-main);'),
        ('  background: var(--brand-gradient) !important;', '  background: var(--clr-main) !important;'),
    ],
    "src/common/navbar/Navbar.css": [
        ('  background: var(--brand-gradient);', '  background: var(--clr-main);'),
    ],
    "src/pages/paymentgetway/paymentgetway.css": [
        ('  background: var(--brand-gradient);', '  background: var(--clr-main);'),
    ],
    "src/pages/paymentgetway/rightside.css": [
        ('  background: var(--brand-gradient);', '  background: var(--clr-main);'),
    ],
    "src/container/prescription/prescription.css": [
        ('  background: linear-gradient(to right, #08446f, #fff);', '  background: var(--clr-main);'),
    ],
    "src/pages/TreatementPage/treatement_selection.css": [
        ('  background: linear-gradient(157.28deg, #f87233 4.05%, #ffffff 99.06%);', '  background: #f5f6fa;'),
    ],
    "src/pages/NewThankyouPage.js": [
        ('https://nextvial.com/', 'https://pepdrive365.com/'),
        ('mailto:contact@nextvial.com', 'mailto:contact@pepdrive365.com'),
        ('contact@nextvial.com', 'contact@pepdrive365.com'),
        ('href="mailto:support@nextvial.com"', 'href="mailto:support@pepdrive365.com"'),
        ('support@nextvial.com', 'support@pepdrive365.com'),
        ('Why Choose nextvial?', 'Why Choose pepdrive365?'),
        ('"linear-gradient(135deg, #f5f6fa 0%, #F0F9FF 100%)",', '"#f5f6fa",'),
        ('"linear-gradient(to bottom right, color-mix(in srgb, var(--clr-main) 35%, white), color-mix(in srgb, var(--clr-main) 22%, white))",', '"rgba(28, 35, 64, 0.08)",')
    ],
}

for path, replacements_list in replacements.items():
    p = Path(path)
    if not p.exists():
        print(f"Missing file: {path}")
        continue
    text = p.read_text(encoding="utf-8")
    original_text = text
    for old, new in replacements_list:
        if old not in text:
            print(f"No match for replacement in {path}: {old[:80]}...")
        text = text.replace(old, new)
    if text != original_text:
        p.write_text(text, encoding="utf-8")
        print(f"Updated {path}")
    else:
        print(f"No changes in {path}")

print("Done script")
