'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingBag, Star } from 'lucide-react';
import type { DemoProduct, DemoStoreConfig } from '@/data/portfolio-projects';

export function DemoStoreShell({ store }: { store: DemoStoreConfig }) {
  const styles = store.theme;

  return (
    <div style={{ background: styles.pageBackground, color: styles.text }} className="min-h-screen transition-colors duration-300">
      <header style={{ background: styles.surface, borderColor: styles.border }} className="sticky top-0 z-20 border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-full p-2" style={{ background: `${styles.accent}22` }}>
              <ShoppingBag size={18} style={{ color: styles.accent }} />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em]" style={{ color: styles.muted }}>{store.category}</p>
              <h1 className="text-lg font-semibold">{store.name}</h1>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex" style={{ color: styles.muted }}>
            <a href="#shop" className="transition hover:opacity-80">Shop</a>
            <a href="#story" className="transition hover:opacity-80">About</a>
            <a href="#reviews" className="transition hover:opacity-80">Reviews</a>
          </nav>
          <Link href="/" className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90" style={{ background: styles.accent }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </Link>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
            <div className="inline-flex rounded-full px-3 py-1 text-sm font-medium" style={{ background: `${styles.accent}18`, color: styles.accent }}>
              Premium Shopify Demo
            </div>
            <h2 className="max-w-xl text-4xl font-semibold leading-tight sm:text-5xl">{store.heroTitle}</h2>
            <p className="max-w-2xl text-lg leading-8" style={{ color: styles.muted }}>{store.heroSubtitle}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#shop" className="rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90" style={{ background: styles.accent }}>
                Shop Now
              </a>
              <a href="#story" className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:opacity-90" style={{ borderColor: styles.border, color: styles.primary }}>
                Learn More
              </a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[2rem] shadow-2xl" style={{ border: `1px solid ${styles.border}` }}>
            <Image src={store.heroImage} alt={store.name} width={900} height={900} className="h-full w-full object-cover" />
          </motion.div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {store.categories.map((category) => (
              <div key={category} className="rounded-[1.2rem] px-4 py-4 text-center text-sm font-medium shadow-sm" style={{ background: styles.surface, border: `1px solid ${styles.border}` }}>
                {category}
              </div>
            ))}
          </div>
        </section>

        <section id="shop" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: styles.accent }}>Featured Products</p>
              <h3 className="mt-2 text-3xl font-semibold">Best sellers for this season</h3>
            </div>
            <div className="hidden rounded-full px-4 py-2 text-sm font-medium sm:block" style={{ background: `${styles.accent}12`, color: styles.accent }}>
              Free shipping over $150
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {store.featuredProducts.map((product, index) => (
              <motion.article key={product.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="overflow-hidden rounded-[1.5rem] shadow-sm" style={{ background: styles.surface, border: `1px solid ${styles.border}` }}>
                <div className="relative h-56">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                  {product.badge ? <span className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold text-white" style={{ background: styles.accent }}>{product.badge}</span> : null}
                </div>
                <div className="p-5">
                  <p className="text-sm" style={{ color: styles.muted }}>{product.category}</p>
                  <h4 className="mt-2 font-semibold">{product.name}</h4>
                  <div className="mt-3 flex items-center justify-between">
                    <div>
                      <p className="text-lg font-semibold">{product.price}</p>
                      {product.oldPrice ? <p className="text-sm text-zinc-400 line-through">{product.oldPrice}</p> : null}
                    </div>
                    <button className="rounded-full px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90" style={{ background: styles.accent }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] p-8 shadow-sm" style={{ background: styles.surface, border: `1px solid ${styles.border}` }}>
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: styles.accent }}>Why customers love it</p>
                <h3 className="mt-3 text-3xl font-semibold">Crafted to feel premium at every touchpoint.</h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {['Fast checkout', 'Premium materials', 'Made to order', 'Worldwide shipping'].map((item) => (
                  <div key={item} className="rounded-[1.2rem] px-4 py-4 text-sm font-medium" style={{ background: `${styles.accent}10` }}>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div className="rounded-[2rem] p-8 shadow-sm" style={{ background: styles.surface, border: `1px solid ${styles.border}` }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: styles.accent }}>Our Story</p>
            <h3 className="mt-3 text-3xl font-semibold">Built for design-forward shoppers.</h3>
            <p className="mt-4 leading-8" style={{ color: styles.muted }}>{store.story}</p>
          </div>
          <div className="rounded-[2rem] p-8 shadow-sm" style={{ background: styles.surface, border: `1px solid ${styles.border}` }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: styles.accent }}>Customer Reviews</p>
            <div id="reviews" className="mt-4 space-y-4">
              {store.reviews.map((review) => (
                <div key={review.name} className="rounded-[1.2rem] border p-4" style={{ borderColor: styles.border }}>
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: review.rating }).map((_, index) => <Star key={index} size={16} fill="currentColor" />)}
                  </div>
                  <p className="mt-3 text-sm leading-7" style={{ color: styles.muted }}>“{review.quote}”</p>
                  <p className="mt-2 font-semibold">{review.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="rounded-[2rem] p-8 text-center shadow-sm" style={{ background: styles.surface, border: `1px solid ${styles.border}` }}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em]" style={{ color: styles.accent }}>Stay Updated</p>
            <h3 className="mt-3 text-3xl font-semibold">Get early access to drops and exclusive offers.</h3>
            <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
              <input className="w-full rounded-full border px-4 py-3 sm:max-w-sm" style={{ borderColor: styles.border, background: styles.pageBackground }} placeholder="Email address" />
              <button className="rounded-full px-6 py-3 font-semibold text-white transition hover:opacity-90" style={{ background: styles.accent }}>
                Join Newsletter
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t px-4 py-8 text-sm sm:px-6 lg:px-8" style={{ borderColor: styles.border, color: styles.muted }}>
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 {store.name}. Premium storefront demo.</p>
          <div className="flex gap-4">
            <a href="#shop" className="transition hover:opacity-80">Shop</a>
            <a href="#story" className="transition hover:opacity-80">About</a>
            <a href="#reviews" className="transition hover:opacity-80">Reviews</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
