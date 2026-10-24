const fs = require("fs");
const path = require("path");

const srcDir = path.join(
  "c:/Users/hp/Downloads/checkout_code_main-main/fit29-product-images"
);
const destDir = path.join(
  "c:/Users/hp/Downloads/checkout_code_main-main/fit29_checkout_code/src/assets/products"
);

const renameMap = {
  "Acid Reflux.png": "acid-reflux.png",
  "Birth Control.png": "birth-control.png",
  "Cold Sores.png": "cold-sores.png",
  "Complete Optimization Man.png": "complete-optimization-man.png",
  "Customized Skincare.png": "customized-skincare.png",
  "Daily ED Performance.png": "daily-ed-performance.png",
  "Erectile Dysfunction - Sildenafil.png": "erectile-dysfunction-sildenafil.png",
  "Erectile Dysfunction.png": "erectile-dysfunction.png",
  "Eyelash Treatment.png": "eyelash-treatment.png",
  "Glutathione.png": "glutathione.png",
  "Hair + Performance.png": "hair-performance.png",
  "Herpes.png": "herpes.png",
  "Hormone Continuity + Metabolic.png": "hormone-continuity-metabolic.png",
  "Longevity Goddess Protocol.png": "longevity-goddess-protocol.png",
  "Men's Hair Loss.png": "mens-hair-loss.png",
  "Men's Longevity Protocol.png": "mens-longevity-protocol.png",
  "Metformin.png": "metformin.png",
  "NAD+ Injectable.png": "nad-injectable.png",
  "Premature Ejaculation.png": "premature-ejaculation.png",
  "PT-141.png": "pt-141.png",
  "Pure Skin Renewal.png": "pure-skin-renewal.png",
  "Sema Glow Starter.png": "sema-glow-starter.png",
  "Sema Radiance.png": "sema-radiance.png",
  "Sema Starter Man.png": "sema-starter-man.png",
  "Sema Transformation.png": "sema-transformation.png",
  "Sema Year Commitment.png": "sema-year-commitment.png",
  "Semaglutide.png": "semaglutide.png",
  "Sermorelin.png": "sermorelin.png",
  "Smoking Cessation.png": "smoking-cessation.png",
  "Tirzepatide + Skin.png": "tirzepatide-skin.png",
  "Tirzepatide Accelerator.png": "tirzepatide-accelerator.png",
  "Tirzepatide Elite.png": "tirzepatide-elite.png",
  "Tirzepatide.png": "tirzepatide.png",
  "TRT Foundation.png": "trt-foundation.png",
  "Women's Hair Loss.png": "womens-hair-loss.png",
  "Women's Sema Starter.png": "womens-sema-starter.png",
  "Women's Sexual Wellness.png": "womens-sexual-wellness.png",
  "Women's Year of Transformation.png": "womens-year-of-transformation.png",
};

fs.mkdirSync(destDir, { recursive: true });

let copied = 0;
for (const [from, to] of Object.entries(renameMap)) {
  const fromPath = path.join(srcDir, from);
  const toPath = path.join(destDir, to);
  if (!fs.existsSync(fromPath)) {
    console.error("MISSING:", from);
    continue;
  }
  fs.copyFileSync(fromPath, toPath);
  copied += 1;
  console.log("copied", from, "->", to);
}

console.log("Copied", copied, "of", Object.keys(renameMap).length);
