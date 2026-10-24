import fallbackImg from "../assets/logos/bottel_img.png";

import imgAcidReflux from "../assets/products/acid-reflux.png";
import imgBirthControl from "../assets/products/birth-control.png";
import imgColdSores from "../assets/products/cold-sores.png";
import imgCompleteOptimizationMan from "../assets/products/complete-optimization-man.png";
import imgCustomizedSkincare from "../assets/products/customized-skincare.png";
import imgDailyEdPerformance from "../assets/products/daily-ed-performance.png";
import imgEdSildenafil from "../assets/products/erectile-dysfunction-sildenafil.png";
import imgEdTadalafil from "../assets/products/erectile-dysfunction.png";
import imgEyelashTreatment from "../assets/products/eyelash-treatment.png";
import imgGlutathione from "../assets/products/glutathione.png";
import imgHairPerformance from "../assets/products/hair-performance.png";
import imgHerpes from "../assets/products/herpes.png";
import imgHormoneContinuity from "../assets/products/hormone-continuity-metabolic.png";
import imgLongevityGoddess from "../assets/products/longevity-goddess-protocol.png";
import imgMensHairLoss from "../assets/products/mens-hair-loss.png";
import imgMensLongevity from "../assets/products/mens-longevity-protocol.png";
import imgMetformin from "../assets/products/metformin.png";
import imgNadInjectable from "../assets/products/nad-injectable.png";
import imgPrematureEjaculation from "../assets/products/premature-ejaculation.png";
import imgPt141 from "../assets/products/pt-141.png";
import imgPureSkinRenewal from "../assets/products/pure-skin-renewal.png";
import imgSemaGlowStarter from "../assets/products/sema-glow-starter.png";
import imgSemaRadiance from "../assets/products/sema-radiance.png";
import imgSemaStarterMan from "../assets/products/sema-starter-man.png";
import imgSemaTransformation from "../assets/products/sema-transformation.png";
import imgSemaYearCommitment from "../assets/products/sema-year-commitment.png";
import imgSemaglutide from "../assets/products/semaglutide.png";
import imgSermorelin from "../assets/products/sermorelin.png";
import imgSmokingCessation from "../assets/products/smoking-cessation.png";
import imgTirzepatideSkin from "../assets/products/tirzepatide-skin.png";
import imgTirzepatideAccelerator from "../assets/products/tirzepatide-accelerator.png";
import imgTirzepatideElite from "../assets/products/tirzepatide-elite.png";
import imgTirzepatide from "../assets/products/tirzepatide.png";
import imgTrtFoundation from "../assets/products/trt-foundation.png";
import imgWomensHairLoss from "../assets/products/womens-hair-loss.png";
import imgWomensSemaStarter from "../assets/products/womens-sema-starter.png";
import imgWomensSexualWellness from "../assets/products/womens-sexual-wellness.png";
import imgWomensYearOfTransformation from "../assets/products/womens-year-of-transformation.png";

// Checkout URL product IDs from FIT29 catalog → mapped image files.
const PRODUCT_IMAGE_BY_ID = {
  // Catalog IDs (CSV) that do not collide with checkout IDs
  3: imgSermorelin,
  4: imgSemaglutide,
  5: imgTirzepatide,
  6: imgMetformin,
  8: imgGlutathione,
  10: imgEdTadalafil,
  11: imgPrematureEjaculation,
  12: imgPt141,
  13: imgMensHairLoss,
  14: imgWomensHairLoss,
  15: imgEyelashTreatment,
  16: imgCustomizedSkincare,
  17: imgBirthControl,
  18: imgHerpes,
  19: imgColdSores,
  20: imgAcidReflux,
  21: imgSmokingCessation,
  22: imgSemaStarterMan,
  24: imgSemaYearCommitment,
  25: imgTirzepatideAccelerator,
  26: imgTirzepatideElite,
  27: imgTrtFoundation,
  28: imgDailyEdPerformance,
  30: imgMensLongevity,
  31: imgCompleteOptimizationMan,
  32: imgWomensSemaStarter,
  33: imgSemaGlowStarter,
  34: imgSemaRadiance,
  36: imgWomensYearOfTransformation,
  37: imgPureSkinRenewal,
  38: imgHormoneContinuity,
  39: imgWomensSexualWellness,
  40: imgLongevityGoddess,

  // Semaglutide checkout IDs (catalog 4)
  2: imgSemaglutide,
  35: imgSemaglutide,
  41: imgSemaglutide,
  47: imgSemaglutide,

  // Tirzepatide (catalog 5)
  7: imgTirzepatide,
  23: imgTirzepatide,
  29: imgTirzepatide,
  54: imgTirzepatide,

  // Sermorelin (catalog 3)
  63: imgSermorelin,
  64: imgSermorelin,
  65: imgSermorelin,
  66: imgSermorelin,

  // Metformin (catalog 6)
  67: imgMetformin,
  73: imgMetformin,
  74: imgMetformin,
  75: imgMetformin,

  // Glutathione (catalog 8)
  76: imgGlutathione,
  77: imgGlutathione,
  78: imgGlutathione,
  79: imgGlutathione,

  // NAD+ Injectable (catalog 7)
  91: imgNadInjectable,
  92: imgNadInjectable,
  93: imgNadInjectable,
  94: imgNadInjectable,

  // PT-141 (catalog 12)
  95: imgPt141,
  96: imgPt141,
  97: imgPt141,
  98: imgPt141,

  // Customized Skincare (catalog 16)
  109: imgCustomizedSkincare,
  110: imgCustomizedSkincare,
  111: imgCustomizedSkincare,
  112: imgCustomizedSkincare,
  113: imgCustomizedSkincare,
  114: imgCustomizedSkincare,

  // Herpes (catalog 18)
  115: imgHerpes,
  116: imgHerpes,
  117: imgHerpes,

  // Erectile Dysfunction — Sildenafil variant
  118: imgEdSildenafil,
  119: imgEdSildenafil,
  120: imgEdSildenafil,
  121: imgEdSildenafil,
  122: imgEdSildenafil,
  123: imgEdSildenafil,
  124: imgEdSildenafil,
  125: imgEdSildenafil,
  126: imgEdSildenafil,
  127: imgEdSildenafil,
  128: imgEdSildenafil,
  129: imgEdSildenafil,
  130: imgEdSildenafil,
  131: imgEdSildenafil,
  132: imgEdSildenafil,
  133: imgEdSildenafil,
  134: imgEdSildenafil,
  135: imgEdSildenafil,
  136: imgEdSildenafil,
  137: imgEdSildenafil,
  138: imgEdSildenafil,
  139: imgEdSildenafil,
  140: imgEdSildenafil,
  141: imgEdSildenafil,
  142: imgEdSildenafil,
  143: imgEdSildenafil,
  144: imgEdSildenafil,
  145: imgEdSildenafil,
  146: imgEdSildenafil,
  147: imgEdSildenafil,
  148: imgEdSildenafil,
  149: imgEdSildenafil,
  150: imgEdSildenafil,
  151: imgEdSildenafil,
  152: imgEdSildenafil,
  153: imgEdSildenafil,
  154: imgEdSildenafil,
  155: imgEdSildenafil,
  156: imgEdSildenafil,
  157: imgEdSildenafil,

  // Erectile Dysfunction — Tadalafil variant (default)
  158: imgEdTadalafil,
  159: imgEdTadalafil,
  160: imgEdTadalafil,
  161: imgEdTadalafil,
  162: imgEdTadalafil,
  163: imgEdTadalafil,
  164: imgEdTadalafil,
  165: imgEdTadalafil,
  166: imgEdTadalafil,
  167: imgEdTadalafil,
  168: imgEdTadalafil,
  169: imgEdTadalafil,
  170: imgEdTadalafil,
  171: imgEdTadalafil,
  172: imgEdTadalafil,
  173: imgEdTadalafil,
  174: imgEdTadalafil,
  175: imgEdTadalafil,
  176: imgEdTadalafil,
  177: imgEdTadalafil,
  178: imgEdTadalafil,
  179: imgEdTadalafil,
  180: imgEdTadalafil,
  181: imgEdTadalafil,
  182: imgEdTadalafil,
  183: imgEdTadalafil,
  184: imgEdTadalafil,
  185: imgEdTadalafil,
  186: imgEdTadalafil,
  187: imgEdTadalafil,
  188: imgEdTadalafil,
  189: imgEdTadalafil,
  190: imgEdTadalafil,
  191: imgEdTadalafil,
  192: imgEdTadalafil,
  193: imgEdTadalafil,
  194: imgEdTadalafil,
  195: imgEdTadalafil,
  196: imgEdTadalafil,
  197: imgEdTadalafil,
  198: imgEdTadalafil,
  199: imgEdTadalafil,
  200: imgEdTadalafil,
  201: imgEdTadalafil,
  202: imgEdTadalafil,
  203: imgEdTadalafil,
  204: imgEdTadalafil,
  205: imgEdTadalafil,

  // Cold Sores (catalog 19)
  206: imgColdSores,

  // Men's Hair Loss (catalog 13)
  207: imgMensHairLoss,
  208: imgMensHairLoss,
  209: imgMensHairLoss,

  // Women's Hair Loss (catalog 14)
  210: imgWomensHairLoss,
  211: imgWomensHairLoss,
  212: imgWomensHairLoss,

  // Premature Ejaculation (catalog 11)
  213: imgPrematureEjaculation,
  214: imgPrematureEjaculation,
  215: imgPrematureEjaculation,

  // Birth Control (catalog 17)
  218: imgBirthControl,
  219: imgBirthControl,
  220: imgBirthControl,
  221: imgBirthControl,
  222: imgBirthControl,
  223: imgBirthControl,
  224: imgBirthControl,
  225: imgBirthControl,
  226: imgBirthControl,
  227: imgBirthControl,
  228: imgBirthControl,
  229: imgBirthControl,
  230: imgBirthControl,
  231: imgBirthControl,
  232: imgBirthControl,
  233: imgBirthControl,
  234: imgBirthControl,
  235: imgBirthControl,
  236: imgBirthControl,

  // Smoking Cessation (catalog 21)
  237: imgSmokingCessation,

  // Acid Reflux (catalog 20)
  238: imgAcidReflux,

  // Eyelash Treatment (catalog 15)
  243: imgEyelashTreatment,
};

// Most specific names first so packages win over generic Semaglutide/Tirzepatide.
const NAME_IMAGE_RULES = [
  [/complete women'?s optimization/i, imgSemaglutide],
  [/complete optimization man/i, imgCompleteOptimizationMan],
  [/women'?s year of transformation/i, imgWomensYearOfTransformation],
  [/hormone continuity/i, imgHormoneContinuity],
  [/longevity goddess/i, imgLongevityGoddess],
  [/men'?s longevity/i, imgMensLongevity],
  [/women'?s sexual wellness/i, imgWomensSexualWellness],
  [/tirzepatide accelerator/i, imgTirzepatideAccelerator],
  [/tirzepatide elite/i, imgTirzepatideElite],
  [/tirzepatide\s*\+?\s*skin/i, imgTirzepatideSkin],
  [/sema year commitment/i, imgSemaYearCommitment],
  [/sema transformation/i, imgSemaTransformation],
  [/sema starter man/i, imgSemaStarterMan],
  [/women'?s sema starter/i, imgWomensSemaStarter],
  [/sema glow starter/i, imgSemaGlowStarter],
  [/sema radiance/i, imgSemaRadiance],
  [/daily ed performance/i, imgDailyEdPerformance],
  [/hair\s*\+?\s*performance/i, imgHairPerformance],
  [/trt foundation/i, imgTrtFoundation],
  [/pure skin renewal/i, imgPureSkinRenewal],
  [/customized skincare|skincare/i, imgCustomizedSkincare],
  [/eyelash/i, imgEyelashTreatment],
  [/women'?s hair/i, imgWomensHairLoss],
  [/men'?s hair|finasteride/i, imgMensHairLoss],
  [/premature ejaculation/i, imgPrematureEjaculation],
  [/sildenafil/i, imgEdSildenafil],
  [/tadalafil|erectile/i, imgEdTadalafil],
  [/cold sore/i, imgColdSores],
  [/herpes/i, imgHerpes],
  [/acid reflux|omeprazole/i, imgAcidReflux],
  [/smoking|bupropion|buproprion/i, imgSmokingCessation],
  [/birth control/i, imgBirthControl],
  [/glutathione/i, imgGlutathione],
  [/nad/i, imgNadInjectable],
  [/metformin/i, imgMetformin],
  [/pt[-\s]?141|bremelanotide/i, imgPt141],
  [/sermorelin/i, imgSermorelin],
  [/tirzepatide/i, imgTirzepatide],
  [/semaglutide|sema/i, imgSemaglutide],
];

export const getProductImage = (product) => {
  if (!product) return fallbackImg;

  const id = String(product.product_id ?? product.id ?? "").trim();
  if (id && PRODUCT_IMAGE_BY_ID[id]) {
    return PRODUCT_IMAGE_BY_ID[id];
  }

  const name = String(product.product_name || product.name || "");
  if (name) {
    for (const [pattern, img] of NAME_IMAGE_RULES) {
      if (pattern.test(name)) return img;
    }
  }

  const apiImg = product?.product_img?.[0]?.img_video;
  if (apiImg) return apiImg;

  return fallbackImg;
};

export default getProductImage;
