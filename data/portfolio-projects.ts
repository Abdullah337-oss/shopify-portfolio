export type StoreTheme = {
  pageBackground: string;
  surface: string;
  primary: string;
  accent: string;
  text: string;
  muted: string;
  border: string;
};

export type DemoProduct = {
  name: string;
  price: string;
  oldPrice?: string;
  badge?: string;
  image: string;
  category: string;
};

export type DemoStoreConfig = {
  slug: string;
  name: string;
  category: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImage: string;
  theme: StoreTheme;
  categories: string[];
  featuredProducts: DemoProduct[];
  reviews: Array<{ name: string; quote: string; rating: number }>;
  story: string;
};

export type PortfolioProject = {
  name: string;
  category: string;
  image: string;
  tech: string[];
  demo: string;
  caseStudy: string;
  slug: string;
  store: DemoStoreConfig;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    name: 'Luxury Fashion Store',
    category: 'Luxury Ecommerce',
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80',
    tech: ['Shopify', 'Liquid', 'Tailwind'],
    demo: '/demo/luxury-fashion',
    caseStudy: '#',
    slug: 'luxury-fashion',
    store: {
      slug: 'luxury-fashion',
      name: 'Maison Noir',
      category: 'Luxury Fashion',
      heroTitle: 'Elevated pieces for a bold wardrobe.',
      heroSubtitle: 'Crafted essentials, statement fashion, and elevated everyday luxury.',
      heroImage: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80',
      theme: {
        pageBackground: '#f8f5ef',
        surface: '#ffffff',
        primary: '#111111',
        accent: '#c8a96b',
        text: '#171717',
        muted: '#6b7280',
        border: '#e7dfd2',
      },
      categories: ['New In', 'Accessories', 'Outerwear', 'Limited Edit'],
      featuredProducts: [
        { name: 'Velvet Tailored Coat', price: '$520', oldPrice: '$680', badge: 'New', image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80', category: 'Outerwear' },
        { name: 'Silk Evening Bag', price: '$310', badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80', category: 'Accessories' },
        { name: 'Sculpted Leather Loafers', price: '$240', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80', category: 'Footwear' },
        { name: 'Signature Silk Scarf', price: '$140', badge: 'Limited', image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80', category: 'Accessories' },
      ],
      reviews: [
        { name: 'Amelia R.', quote: 'The quality feels truly luxurious from the first glance.', rating: 5 },
        { name: 'Dylan S.', quote: 'Elegant design and a beautiful premium checkout experience.', rating: 5 },
      ],
      story: 'Maison Noir curates elevated essentials for clients who appreciate timeless style and exceptional craftsmanship.',
    },
  },
  {
    name: 'Furniture Store',
    category: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80',
    tech: ['Shopify', 'Sections', 'SEO'],
    demo: '/demo/furniture-store',
    caseStudy: '#',
    slug: 'furniture-store',
    store: {
      slug: 'furniture-store',
      name: 'Oak & Linen',
      category: 'Furniture',
      heroTitle: 'Warm, timeless interiors for modern living.',
      heroSubtitle: 'Discover sculptural furniture designed for comfort, balance, and elevated homes.',
      heroImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      theme: {
        pageBackground: '#f6efe7',
        surface: '#fffaf4',
        primary: '#5a4332',
        accent: '#b97b45',
        text: '#2f241d',
        muted: '#7c6858',
        border: '#e7d7c6',
      },
      categories: ['Living Room', 'Bedroom', 'Dining', 'Decor'],
      featuredProducts: [
        { name: 'Sculpted Oak Lounge Chair', price: '$430', badge: 'New', image: 'https://images.unsplash.com/photo-1519947486511-46149fa0a254?auto=format&fit=crop&w=800&q=80', category: 'Living Room' },
        { name: 'Cloud Linen Sofa', price: '$980', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80', category: 'Living Room' },
        { name: 'Brushed Walnut Sideboard', price: '$760', badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80', category: 'Dining' },
        { name: 'Stoneware Table Lamp', price: '$140', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80', category: 'Decor' },
      ],
      reviews: [
        { name: 'Jordan K.', quote: 'The furniture feels premium and instantly elevated my space.', rating: 5 },
        { name: 'Nina P.', quote: 'Beautifully made pieces with refined details and easy delivery.', rating: 5 },
      ],
      story: 'Oak & Linen creates thoughtful furniture collections that blend relaxed comfort with clean architectural forms.',
    },
  },
  {
    name: 'Electronics Store',
    category: 'Tech Retail',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
    tech: ['Shopify', 'App Integrations', 'Speed'],
    demo: '/demo/electronics-store',
    caseStudy: '#',
    slug: 'electronics-store',
    store: {
      slug: 'electronics-store',
      name: 'Nova Tech',
      category: 'Electronics',
      heroTitle: 'High-performance tech, designed for modern life.',
      heroSubtitle: 'Discover smart devices, immersive audio, and next-gen essentials.',
      heroImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
      theme: {
        pageBackground: '#07131f',
        surface: '#0d1b2a',
        primary: '#f4f7fb',
        accent: '#4f8cff',
        text: '#eef4ff',
        muted: '#93a7c3',
        border: '#21324a',
      },
      categories: ['Audio', 'Smart Home', 'Gaming', 'Accessories'],
      featuredProducts: [
        { name: 'Nova Pro Headphones', price: '$299', badge: 'Hot', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80', category: 'Audio' },
        { name: 'Smart Hub Pro', price: '$189', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80', category: 'Smart Home' },
        { name: 'Flow RGB Keyboard', price: '$129', badge: 'Sale', image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80', category: 'Gaming' },
        { name: 'Charge Dock Max', price: '$89', image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=800&q=80', category: 'Accessories' },
      ],
      reviews: [
        { name: 'Lucas M.', quote: 'Fast shipping and exceptional product quality.', rating: 5 },
        { name: 'Maya T.', quote: 'The interface feels sleek and the tech is highly polished.', rating: 5 },
      ],
      story: 'Nova Tech is built for ambitious creators and everyday innovators who want premium technology without the complexity.',
    },
  },
  {
    name: 'Cosmetics Store',
    category: 'Beauty Brand',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80',
    tech: ['Shopify', 'Custom Sections', 'UX'],
    demo: '/demo/cosmetics-store',
    caseStudy: '#',
    slug: 'cosmetics-store',
    store: {
      slug: 'cosmetics-store',
      name: 'Luna Glow',
      category: 'Cosmetics',
      heroTitle: 'Radiant beauty, made effortless.',
      heroSubtitle: 'Glowing essentials and skincare favorites for your daily ritual.',
      heroImage: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80',
      theme: {
        pageBackground: '#fff8fb',
        surface: '#ffffff',
        primary: '#5f3d4d',
        accent: '#f3a8c3',
        text: '#2d1f24',
        muted: '#8f6d78',
        border: '#f2dce5',
      },
      categories: ['Skincare', 'Makeup', 'Tools', 'Sets'],
      featuredProducts: [
        { name: 'Velvet Dew Serum', price: '$48', badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80', category: 'Skincare' },
        { name: 'Glow Tint Balm', price: '$34', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80', category: 'Makeup' },
        { name: 'Silk Brush Set', price: '$42', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80', category: 'Tools' },
        { name: 'Radiance Ritual Kit', price: '$88', badge: 'Limited', image: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c3?auto=format&fit=crop&w=800&q=80', category: 'Sets' },
      ],
      reviews: [
        { name: 'Riley C.', quote: 'The products look luxurious and feel beautiful on my skin.', rating: 5 },
        { name: 'Sophia L.', quote: 'Soft, elegant, and incredibly easy to shop.', rating: 5 },
      ],
      story: 'Luna Glow blends science-backed skincare with indulgent beauty experiences for modern routines.',
    },
  },
  {
    name: 'Jewelry Store',
    category: 'Luxury Accessories',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80',
    tech: ['Shopify', 'Animation', 'Conversion'],
    demo: '/demo/jewelry-store',
    caseStudy: '#',
    slug: 'jewelry-store',
    store: {
      slug: 'jewelry-store',
      name: 'Aurelia Atelier',
      category: 'Jewelry',
      heroTitle: 'Fine jewelry that sparkles with intention.',
      heroSubtitle: 'Discover heirloom-inspired pieces crafted for celebration and everyday brilliance.',
      heroImage: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=80',
      theme: {
        pageBackground: '#fdf7ec',
        surface: '#fffaf2',
        primary: '#3c2f22',
        accent: '#c69a3f',
        text: '#2e231a',
        muted: '#7f6b4e',
        border: '#efe2c7',
      },
      categories: ['Rings', 'Necklaces', 'Bracelets', 'Collections'],
      featuredProducts: [
        { name: 'Solstice Diamond Ring', price: '$860', badge: 'Signature', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80', category: 'Rings' },
        { name: 'Halo Pendant', price: '$640', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80', category: 'Necklaces' },
        { name: 'Pearl Cuff Bracelet', price: '$420', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80', category: 'Bracelets' },
        { name: 'Luxe Gift Set', price: '$720', badge: 'Limited', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=800&q=80', category: 'Collections' },
      ],
      reviews: [
        { name: 'Elena B.', quote: 'Every detail feels refined and timeless.', rating: 5 },
        { name: 'Chris F.', quote: 'I felt like I was stepping into a luxury boutique.', rating: 5 },
      ],
      story: 'Aurelia Atelier creates modern heirlooms designed to be treasured, worn, and gifted.',
    },
  },
  {
    name: 'Fitness Brand',
    category: 'Activewear',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80',
    tech: ['Shopify', 'Liquid', 'Performance'],
    demo: '/demo/fitness-brand',
    caseStudy: '#',
    slug: 'fitness-brand',
    store: {
      slug: 'fitness-brand',
      name: 'Pulse Performance',
      category: 'Fitness',
      heroTitle: 'Train hard. Recover stronger.',
      heroSubtitle: 'Performance wear and recovery essentials for modern athletes.',
      heroImage: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80',
      theme: {
        pageBackground: '#0e0e10',
        surface: '#17171a',
        primary: '#f8f8f8',
        accent: '#ff4d3d',
        text: '#f5f5f5',
        muted: '#b0b0b0',
        border: '#2a2a2d',
      },
      categories: ['Training', 'Recovery', 'Accessories', 'Bundles'],
      featuredProducts: [
        { name: 'Velocity Training Jacket', price: '$92', badge: 'New', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', category: 'Training' },
        { name: 'Sprint Compression Tee', price: '$54', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', category: 'Training' },
        { name: 'Recovery Foam Roller', price: '$38', badge: 'Sale', image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80', category: 'Recovery' },
        { name: 'Power Bundle', price: '$140', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=800&q=80', category: 'Bundles' },
      ],
      reviews: [
        { name: 'Marcus W.', quote: 'Performance wear that looks sharp and feels powerful.', rating: 5 },
        { name: 'Tara J.', quote: 'The store feels energetic and the products match the brand perfectly.', rating: 5 },
      ],
      story: 'Pulse Performance delivers high-impact activewear and training essentials to athletes who demand comfort and confidence.',
    },
  },
];
