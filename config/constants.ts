import Cream1 from "../public/cream1.jpeg"
import Cream2 from "../public/cream2.jpeg"
import Cream3 from "../public/cream3.jpeg"
import Cream4 from "../public/cream4.jpeg"
import Cream5 from "../public/cream5.jpeg"
import Cream6 from "../public/cream6.jpeg"

export const NAV_ITEMS = [
  { text: "Home", href: "#hero" },
  { text: "Products", href: "#products" },
  { text: "Contact Us", href: "#contact" },
];

export const TAB_DATA = [
  {
    heading: "Luminous Dew",
    title: "For a fresh, hydrated, dewy glow that feels light and refreshing",
    image: Cream1,
    link: "/products/luminous-dew",
    description: {
      fullDescription:
        "Luminous Dew is your go-to cream for lightweight hydration that leaves skin plump, radiant, and refreshed. This airy formula delivers an instant moisture surge, perfect for reviving dull, dehydrated skin. Designed to mimic the natural glow of morning dew, it absorbs quickly without a greasy residue, making it an ideal base for makeup or a standalone glow enhancer.",
      keyIngredients: [
        "Hyaluronic Acid: Locks in moisture for long-lasting hydration.",
        "Cucumber Extract: Soothes and cools, reducing puffiness.",
        "Green Tea Extract: Provides antioxidant protection against environmental damage.",
      ],
      benefits: [
        "Deeply hydrates without clogging pores.",
        "Enhances natural radiance with a lightweight feel.",
        "Calms irritation for a refreshed complexion.",
      ],
      targetAudience:
        "Ideal for normal to combination skin types, especially those seeking a non-heavy moisturizer for daily use. Perfect for younger users or those in humid climates.",
      howToUse:
        "Apply a pea-sized amount to cleansed face and neck morning and evening. Pair with a sunscreen during the day for optimal protection.",
    },
  },
  {
    heading: "Golden Aura",
    title: "Infused with brightening agents for a warm, sun-kissed radiance",
    image: Cream2,
    link: "/products/golden-aura",
    description: {
      fullDescription:
        "Golden Aura captures the warmth of a golden hour glow, delivering a luminous, even-toned complexion. This brightening cream targets dark spots, hyperpigmentation, and uneven skin tone, unveiling a radiant, sunlit finish. Infused with potent antioxidants, it protects against UV-induced damage while enhancing skin’s natural luminosity.",
      keyIngredients: [
        "Vitamin C: Brightens and fades dark spots for a uniform tone.",
        "Turmeric Extract: Reduces inflammation and enhances glow.",
        "Licorice Root: Evens skin tone and minimizes discoloration.",
      ],
      benefits: [
        "Visibly reduces hyperpigmentation in 4 weeks.",
        "Boosts radiance for a healthy, sun-kissed look.",
        "Shields skin from environmental stressors.",
      ],
      targetAudience:
        "Perfect for those with dull or uneven skin tones, including mature skin or anyone seeking a brighter, more vibrant complexion.",
      howToUse:
        "Apply to cleansed skin twice daily. For best results, use with a broad-spectrum SPF during the day to protect brightened skin.",
    },
  },
  {
    heading: "Velvet Bloom",
    title: "A rich, nourishing formula for silky-smooth, youthful skin",
    image: Cream3,
    link: "/products/velvet-bloom",
    description: {
      fullDescription:
        "Velvet Bloom is a luxurious, rich cream that nourishes and rejuvenates, delivering a velvety-smooth texture and youthful bounce. Formulated to combat dryness and fine lines, this deeply moisturizing cream restores elasticity and firmness, leaving skin soft and supple. Its decadent texture melts into the skin, providing long-lasting hydration.",
      keyIngredients: [
        "Shea Butter: Intensely moisturizes and softens dry skin.",
        "Peptide Complex: Stimulates collagen production to reduce fine lines.",
        "Rosehip Oil: Promotes cell turnover for a youthful glow.",
      ],
      benefits: [
        "Smooths fine lines and wrinkles.",
        "Restores skin’s natural barrier for lasting hydration.",
        "Leaves skin feeling plush and revitalized.",
      ],
      targetAudience:
        "Best for dry or mature skin types, or anyone seeking a rich cream to combat aging signs and restore softness.",
      howToUse:
        "Massage a small amount onto cleansed face and neck at night, or use morning and evening for extra hydration.",
    },
  },
  {
    heading: "Crystal Clarity",
    title: "Targets uneven tone and texture for a clear, flawless complexion",
    image: Cream4,
    link: "/products/crystal-clarity",
    description: {
      fullDescription:
        "Crystal Clarity is your secret weapon for a clear, polished complexion. This lightweight cream targets enlarged pores, uneven texture, and redness, delivering a smooth, refined finish. Perfect for achieving a glass-skin effect, it balances oil production while maintaining hydration, ensuring a flawless canvas for makeup or bare-faced beauty.",
      keyIngredients: [
        "Niacinamide: Minimizes pores and evens skin tone.",
        "Salicylic Acid: Gently exfoliates to clear clogged pores.",
        "Tea Tree Oil: Reduces redness and fights blemishes.",
      ],
      benefits: [
        "Refines skin texture for a smooth, polished look.",
        "Controls excess oil without stripping moisture.",
        "Reduces redness and blemish-prone areas.",
      ],
      targetAudience:
        "Ideal for oily or acne-prone skin, or those with uneven texture seeking a clearer, smoother complexion.",
      howToUse:
        "Apply to cleansed skin morning and evening. Follow with sunscreen during the day to protect refined skin.",
    },
  },
  {
    heading: "Midnight Renewal",
    title: "Designed for overnight repair, restoring vibrance by morning",
    image: Cream5,
    link: "/products/midnight-renewal",
    description: {
      fullDescription:
        "Midnight Renewal works while you sleep, repairing and revitalizing skin for a refreshed, radiant morning glow. This intensive cream accelerates cell turnover, fades signs of fatigue, and strengthens the skin’s barrier, making it perfect for reversing daily damage. Wake up to smoother, brighter, and more resilient skin.",
      keyIngredients: [
        "Retinol (0.5%): Boosts cell turnover to reduce fine lines and imperfections.",
        "Centella Asiatica: Soothes and repairs stressed skin.",
        "Squalane: Locks in moisture and supports skin barrier health.",
      ],
      benefits: [
        "Repairs daily skin damage overnight.",
        "Reduces signs of aging and fatigue.",
        "Enhances skin resilience for a radiant morning glow.",
      ],
      targetAudience:
        "Suited for mature skin or those with busy lifestyles needing overnight recovery. Not recommended for sensitive skin due to retinol.",
      howToUse:
        "Apply a thin layer to cleansed skin at night, 2-3 times per week initially, then daily as tolerated. Always use SPF during the day.",
    },
  },
  {
    heading: "Rose Quartz Bliss",
    title: "Calming and soothing, perfect for sensitive skin with a soft, rosy glow",
    image: Cream6,
    link: "/products/rose-quartz-bliss",
    description: {
      fullDescription:
        "Rose Quartz Bliss is a calming, nurturing cream crafted for sensitive skin, delivering a soft, rosy glow without irritation. This gentle formula reduces redness, strengthens the skin’s barrier, and hydrates deeply, ensuring comfort and radiance. Its lightweight, fragrance-free texture feels like a hug for your skin.",
      keyIngredients: [
        "Aloe Vera: Calms irritation and hydrates sensitive skin.",
        "Chamomile Extract: Reduces redness and soothes inflammation.",
        "Ceramides: Restores the skin barrier for lasting protection.",
      ],
      benefits: [
        "Soothes sensitive, reactive skin.",
        "Hydrates without causing irritation or breakouts.",
        "Imparts a delicate, rosy glow.",
      ],
      targetAudience:
        "Perfect for sensitive or reactive skin types, or anyone seeking a gentle, fragrance-free cream for daily care.",
      howToUse:
        "Apply to cleansed face and neck morning and evening. Safe for daily use and pairs well with minimal skincare routines.",
    },
  },
];

// Shared features applicable to all variants
export const SHARED_FEATURES = {
  cleanBeauty:
    "All Glow Essence Radiance Creams are cruelty-free, vegan, paraben-free, sulfate-free, and dermatologist-tested.",
  packaging:
    "Housed in eco-friendly, recyclable 50ml airless pump jars to preserve potency and reduce waste.",
  clinicalResults:
    "90% of users report improved hydration and glow within 2 weeks across all variants (based on internal trials).",
  usageTip:
    "For optimal results, pair with the Glow Essence Radiance Serum to amplify hydration and radiance.",
};



// export const TAB_DATA = [
//   {
//     heading: "Luminous Dew",
//     title: "For a fresh, hydrated, dewy glow that feels light and refreshing",
//     image: Cream1,
//     link: "/market",
//   },
//   {
//     heading: "Golden Aura",
//     title: "Infused with brightening agents for a warm, sun-kissed radiance.",
//     image: Cream2,
//     link: "/finance",
//   },
//   {
//     heading: "Velvet Bloom",
//     title: "A rich, nourishing formula for silky-smooth, youthful skin.",
//     image: Cream3,
//     link: "/analytics",
//   },
//   {
//     heading: "Crystal Clarity",
//     title: "Targets uneven tone and texture for a clear, flawless complexion.",
//     image: Cream4,
//     link: "/content",
//   },
//   {
//     heading: "Midnight Renewal",
//     title: "Designed for overnight repair, restoring vibrance by morning.",
//     image: Cream5,
//     link: "/support",
//   },
//   {
//     heading: "Rose Quartz Bliss",
//     title: "Calming and soothing, perfect for sensitive skin with a soft, rosy glow.",
//     image: Cream6,
//     link: "/support",
//   },
// ];