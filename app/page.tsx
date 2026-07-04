'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, ArrowUp, BadgeCheck, Briefcase, ChevronDown, Code2, Compass, Contact, Crown, Flashlight, Github, Instagram, Layers3, LifeBuoy, LoaderCircle, MonitorSmartphone, Moon, PackageOpen, PaintbrushVertical, Rocket, ScrollText, Send, ShieldCheck, Sparkles, Star, Sun, Truck, Wand2, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';

const services = [
  { title: 'Shopify Store Creation', description: 'Launch polished storefronts tailored to your brand and sales goals.', icon: Rocket },
  { title: 'Theme Customization', description: 'Refine your store experience with pixel-perfect, conversion-focused theming.', icon: PaintbrushVertical },
  { title: 'Speed Optimization', description: 'Improve Core Web Vitals and deliver faster storefront experiences.', icon: Flashlight },
  { title: 'Bug Fixes', description: 'Resolve issues quickly and keep your store stable and reliable.', icon: ShieldCheck },
  { title: 'Product Upload', description: 'Organize collections, product data, and media with clean structure.', icon: PackageOpen },
  { title: 'Dropshipping Store', description: 'Set up scalable dropshipping workflows and smooth product flows.', icon: Truck },
  { title: 'Landing Page', description: 'Design focused landing pages to drive ad traffic and conversions.', icon: ScrollText },
  { title: 'Store Redesign', description: 'Refresh the look and feel of your brand with modern UX.', icon: Wand2 },
  { title: 'App Integration', description: 'Connect essential apps without compromising performance.', icon: Layers3 },
  { title: 'SEO Optimization', description: 'Improve discoverability with technical and on-page SEO improvements.', icon: Compass },
  { title: 'Liquid Development', description: 'Create flexible custom logic with clean, maintainable Liquid code.', icon: Code2 },
  { title: 'Custom Sections', description: 'Build bespoke sections and layouts that stand apart from templates.', icon: Layers3 },
  { title: 'Payment Gateway Setup', description: 'Configure secure checkout flows that reduce friction.', icon: ShieldCheck },
  { title: 'Store Migration', description: 'Move to Shopify confidently without losing structure or data.', icon: ArrowRight },
];

const skills = [
  'Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Bootstrap', 'Git', 'GitHub', 'Figma to Shopify', 'Responsive Design', 'SEO', 'Performance Optimization'
];

const projects = [
  { name: 'Luxury Fashion Store', category: 'Luxury Ecommerce', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=80', tech: ['Shopify', 'Liquid', 'Tailwind'], demo: '#', caseStudy: '#' },
  { name: 'Furniture Store', category: 'Home Decor', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', tech: ['Shopify', 'Sections', 'SEO'], demo: '#', caseStudy: '#' },
  { name: 'Electronics Store', category: 'Tech Retail', image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80', tech: ['Shopify', 'App Integrations', 'Speed'], demo: '#', caseStudy: '#' },
  { name: 'Cosmetics Store', category: 'Beauty Brand', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=900&q=80', tech: ['Shopify', 'Custom Sections', 'UX'], demo: '#', caseStudy: '#' },
  { name: 'Jewelry Store', category: 'Luxury Accessories', image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=900&q=80', tech: ['Shopify', 'Animation', 'Conversion'], demo: '#', caseStudy: '#' },
  { name: 'Fitness Brand', category: 'Activewear', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=900&q=80', tech: ['Shopify', 'Liquid', 'Performance'], demo: '#', caseStudy: '#' },
];

const whyChoose = [
  { title: 'Fast Delivery', icon: Rocket },
  { title: 'Unlimited Revisions', icon: Sparkles },
  { title: 'Clean Code', icon: Code2 },
  { title: 'Mobile Responsive', icon: MonitorSmartphone },
  { title: 'SEO Friendly', icon: Compass },
  { title: 'Performance Optimized', icon: Flashlight },
  { title: 'Lifetime Support', icon: LifeBuoy },
  { title: 'Easy Communication', icon: Contact },
];

const testimonials = [
  { name: 'Ava Thompson', country: 'United Kingdom', review: 'The redesign doubled our conversion rate within weeks. Fast communication and stunning attention to detail.', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' },
  { name: 'Liam Chen', country: 'Canada', review: 'Speed improved dramatically and our store feels premium. The custom sections are exactly what we needed.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80' },
  { name: 'Sophia Martinez', country: 'Australia', review: 'Migration was smooth, and the new theme looks incredible on mobile. I highly recommend him.', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80' },
  { name: 'Noah Kim', country: 'USA', review: 'Professional, organized, and very skilled with Liquid. Every request was handled quickly.', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80' },
  { name: 'Mia Patel', country: 'UAE', review: 'The app integrations are flawless and the store feels much faster. Great experience overall.', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80' },
  { name: 'Ethan Brooks', country: 'Germany', review: 'We needed a high-converting landing page and got it delivered beautifully and on time.', avatar: 'https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80' },
];

const process = ['Requirements Discussion', 'Planning', 'Design', 'Development', 'Testing', 'Delivery'];

const pricing = [
  { name: 'Basic', price: '$199', features: ['Shopify Store Setup', 'Basic Customization', '3 Revisions', 'Delivery in 5 Days'], highlight: false },
  { name: 'Standard', price: '$499', features: ['Premium Theme Customization', 'Speed Optimization', 'Unlimited Revisions', 'Priority Support'], highlight: true },
  { name: 'Premium', price: '$999', features: ['Advanced Custom Development', 'App Integrations', 'SEO Setup', 'Lifetime Support'], highlight: false },
];

const faqs = [
  { question: 'Can you redesign my Shopify store?', answer: 'Absolutely. I create modern, conversion-focused redesigns that improve both aesthetics and user experience.' },
  { question: 'Do you fix Shopify bugs?', answer: 'Yes. I handle custom fixes, theme issues, checkout problems, and performance-related bugs.' },
  { question: 'Can you migrate my website?', answer: 'I can migrate stores to Shopify carefully, preserving content structure and improving setup where needed.' },
  { question: 'Do you provide support?', answer: 'Yes, I offer ongoing support and fast communication for maintenance and updates.' },
  { question: 'How long does a project take?', answer: 'Timeline depends on scope, but most standard projects are delivered within a few days to a couple weeks.' },
];

const counters = [
  { value: 100, label: 'Client Satisfaction', suffix: '%' },
  { value: 50, label: 'Projects Delivered', suffix: '+' },
  { value: 8, label: 'Years Experience', suffix: '+' },
  { value: 24, label: 'Hour Response Time', suffix: 'h' },
];

const projectFilters = ['All', 'Luxury Ecommerce', 'Home Decor', 'Tech Retail', 'Beauty Brand', 'Luxury Accessories', 'Activewear'];

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const [mounted, setMounted] = useState(false);
  const [activeFaq, setActiveFaq] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [typedText, setTypedText] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const text = 'I build high-converting, fast, and visually stunning Shopify stores that help businesses grow.';
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(text.slice(0, index + 1));
      index += 1;
      if (index === text.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroIcons = useMemo(() => [
    { icon: ShoppingBag, label: 'Storefront' },
    { icon: CreditCard, label: 'Payments' },
    { icon: TrendingUp, label: 'Growth' },
  ], []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.18),_transparent_40%)] dark:bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.15),_transparent_40%)]">
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-xl dark:bg-zinc-950/90">
          <div className="flex flex-col items-center gap-4">
            <LoaderCircle className="h-10 w-10 animate-spin text-emerald-500" />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">Loading Portfolio</p>
          </div>
        </div>
      ) : null}

      <motion.div style={{ scaleX: progress }} className="fixed left-0 top-0 z-40 h-1 origin-left bg-emerald-500" />
      <header className="sticky top-0 z-30 border-b border-zinc-200/70 bg-white/70 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/70">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-tight">Shopify<span className="text-gradient">Pro</span></a>
          <div className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex dark:text-zinc-300">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-emerald-500">{item}</a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')} className="rounded-full border border-zinc-200 p-2.5 text-zinc-600 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-800 dark:text-zinc-300">
              {resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <a href="https://www.fiverr.com" target="_blank" rel="noreferrer" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-600">Hire Me on Fiverr</a>
          </div>
        </nav>
      </header>

      <section id="home" className="relative px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600">
              <Sparkles className="h-4 w-4" /> Freelance Shopify Developer
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-7xl">
              Professional Shopify Developer
            </h1>
            <p className="mt-6 min-h-24 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              {typedText}
              <span className="ml-1 animate-pulse text-emerald-500">|</span>
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://www.fiverr.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-emerald-600">Hire Me on Fiverr <ArrowRight className="ml-2 h-4 w-4" /></a>
              <a href="#portfolio" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-200">View Portfolio</a>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" /> 100% Satisfaction</div>
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" /> Fast Delivery</div>
              <div className="flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-emerald-500" /> SEO Ready</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.1 }} className="relative">
            <div className="absolute left-8 top-10 h-40 w-40 rounded-full bg-emerald-400/30 blur-3xl" />
            <div className="absolute bottom-8 right-6 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[2rem] p-6 shadow-2xl">
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-emerald-500/20 via-white to-cyan-500/10 p-6 dark:from-emerald-500/10 dark:via-zinc-900 dark:to-cyan-500/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_rgba(255,255,255,0.8),_transparent_25%)]" />
                <div className="absolute left-6 top-6 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-2 text-sm font-semibold"><Crown className="h-4 w-4 text-emerald-500" /> Premium Store</div>
                </div>
                <div className="absolute bottom-6 right-6 rounded-2xl bg-white/80 p-4 shadow-lg backdrop-blur">
                  <div className="flex items-center gap-2 text-sm font-semibold"><TrendingUp className="h-4 w-4 text-emerald-500" /> +42% Sales</div>
                </div>
                <div className="absolute left-10 top-32 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-emerald-500/10 p-3"><ShoppingBag className="h-6 w-6 text-emerald-500" /></div>
                    <div>
                      <p className="text-sm text-zinc-500">Storefront</p>
                      <p className="font-semibold">Modern UX</p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-20 left-24 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur">
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-emerald-500/10 p-3"><CreditCard className="h-6 w-6 text-emerald-500" /></div>
                    <div>
                      <p className="text-sm text-zinc-500">Checkout</p>
                      <p className="font-semibold">Fast & Secure</p>
                    </div>
                  </div>
                </div>
                {heroIcons.map((item, index) => (
                  <motion.div key={item.label} animate={{ y: [0, -10, 0], rotate: [0, 3, 0] }} transition={{ duration: 4 + index, repeat: Infinity, ease: 'easeInOut' }} className={`absolute ${index === 0 ? 'right-10 top-12' : index === 1 ? 'right-24 top-40' : 'bottom-12 right-32'} rounded-2xl bg-white/80 p-3 shadow-lg backdrop-blur`}>
                    <item.icon className="h-6 w-6 text-emerald-500" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-200/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">About Me</p>
              <h2 className="section-title">I turn Shopify ideas into premium, sales-ready experiences.</h2>
              <p className="text-lg leading-8 text-zinc-600 dark:text-zinc-300">I’m a freelance Shopify developer focused on building thoughtful storefronts that look beautiful and convert better. From theme customization to advanced Liquid work, I help businesses launch faster and scale smarter.</p>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Shopify Development', 'Shopify Store Design', 'Theme Customization', 'Shopify Speed Optimization', 'Shopify Bug Fixes', 'Shopify Store Migration', 'Shopify App Integration', 'Shopify Landing Pages'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200"><BadgeCheck className="h-4 w-4 text-emerald-500" />{item}</div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid gap-4 sm:grid-cols-2">
              {['100% Client Satisfaction', 'Clean Code', 'Responsive Design', 'Fast Delivery', 'SEO Optimized'].map((item) => (
                <div key={item} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="mb-3 inline-flex rounded-full bg-emerald-500/10 p-2"><BadgeCheck className="h-5 w-5 text-emerald-500" /></div>
                  <h3 className="font-semibold">{item}</h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">Designed to build trust, performance, and long-term value for every project.</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Services</p>
            <h2 className="section-title mt-3">Everything you need to launch and grow a premium Shopify store.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article key={service.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.03 }} whileHover={{ y: -8, scale: 1.01 }} className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm transition hover:shadow-soft dark:border-zinc-800 dark:bg-zinc-900">
                  <div className="mb-4 inline-flex rounded-2xl bg-emerald-500/10 p-3"><Icon className="h-6 w-6 text-emerald-500" /></div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{service.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-200/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 lg:p-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Skills</p>
            <h2 className="section-title mt-3">Tools and technologies I use to build standout Shopify experiences.</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <motion.div key={skill} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.25, delay: index * 0.02 }} className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-200">
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Portfolio</p>
              <h2 className="section-title mt-3">Selected projects that blend design, performance, and conversion.</h2>
            </div>
            <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-600">6 Premium Projects</div>
          </div>
          <div className="mb-8 flex flex-wrap gap-3">
            {projectFilters.map((filter) => (
              <button key={filter} onClick={() => setActiveFilter(filter)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeFilter === filter ? 'bg-emerald-500 text-white' : 'border border-zinc-300 text-zinc-600 hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-300'}`}>
                {filter}
              </button>
            ))}
          </div>
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.filter((project) => activeFilter === 'All' || project.category === activeFilter).map((project, index) => (
              <motion.article key={project.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.05 }} whileHover={{ y: -8, scale: 1.01 }} className="group overflow-hidden rounded-[1.75rem] border border-zinc-200 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <button onClick={() => setSelectedProject(project)} className="block w-full text-left">
                  <div className="relative h-56 overflow-hidden">
                    <Image src={project.image} alt={project.name} fill className="object-cover transition duration-500 group-hover:scale-105" />
                  </div>
                </button>
                <div className="p-6">
                  <p className="text-sm font-medium text-emerald-500">{project.category}</p>
                  <h3 className="mt-2 text-xl font-semibold">{project.name}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tech}</span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href={project.demo} className="flex-1 rounded-full bg-emerald-500 px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-emerald-600">Live Demo</a>
                    <a href={project.caseStudy} className="flex-1 rounded-full border border-zinc-300 px-4 py-2 text-center text-sm font-semibold text-zinc-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-200">Case Study</a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
        {selectedProject ? (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur">
            <div className="relative w-full max-w-4xl overflow-hidden rounded-[2rem] bg-white p-3 shadow-2xl dark:bg-zinc-900">
              <button onClick={() => setSelectedProject(null)} className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 shadow dark:bg-zinc-800">
                <X className="h-5 w-5" />
              </button>
              <div className="relative h-[420px] overflow-hidden rounded-[1.5rem]">
                <Image src={selectedProject.image} alt={selectedProject.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <p className="text-sm font-medium text-emerald-500">{selectedProject.category}</p>
                <h3 className="mt-2 text-2xl font-semibold">{selectedProject.name}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">A premium Shopify build designed for fast loading, strong visual identity, and improved conversion.</p>
              </div>
            </div>
          </div>
        ) : null}
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {counters.map((counter, index) => (
            <AnimatedCounter key={counter.label} value={counter.value} label={counter.label} suffix={counter.suffix} delay={index * 0.08} />
          ))}
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-200/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 lg:p-12">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Why Choose Me</p>
            <h2 className="section-title mt-3">Premium quality that makes your Shopify store stand out.</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div key={item.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
                  <div className="mb-4 inline-flex rounded-2xl bg-emerald-500/10 p-3"><Icon className="h-6 w-6 text-emerald-500" /></div>
                  <h3 className="font-semibold">{item.title}</h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Testimonials</p>
            <h2 className="section-title mt-3">Trusted by founders and brands who want premium Shopify results.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.04 }} className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                <div className="flex items-center gap-4">
                  <Image src={item.avatar} alt={item.name} width={56} height={56} className="rounded-full object-cover" />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-zinc-500">{item.country}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, s) => <Star key={s} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-300">“{item.review}”</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-200/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 lg:p-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Process</p>
            <h2 className="section-title mt-3">A smooth, transparent workflow from concept to launch.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {process.map((step, index) => (
              <motion.div key={step} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: index * 0.04 }} className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-950">
                <div className="mb-4 text-sm font-semibold text-emerald-500">0{index + 1}</div>
                <h3 className="text-lg font-semibold">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Pricing</p>
            <h2 className="section-title mt-3">Flexible options for startups, brands, and growing stores.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {pricing.map((plan) => (
              <div key={plan.name} className={`rounded-[2rem] border p-8 shadow-sm ${plan.highlight ? 'border-emerald-500 bg-emerald-500/5 shadow-soft' : 'border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900'}`}>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.highlight ? <span className="rounded-full bg-emerald-500 px-3 py-1 text-sm font-semibold text-white">Most Popular</span> : null}
                </div>
                <div className="mt-6 text-4xl font-semibold">{plan.price}<span className="text-base font-medium text-zinc-500">/project</span></div>
                <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {plan.features.map((feature) => <li key={feature} className="flex items-start gap-2"><BadgeCheck className="mt-0.5 h-4 w-4 text-emerald-500" />{feature}</li>)}
                </ul>
                <a href="#contact" className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 font-semibold ${plan.highlight ? 'bg-emerald-500 text-white hover:bg-emerald-600' : 'border border-zinc-300 text-zinc-700 hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-200'}`}>Choose Plan</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-200/70 bg-white/70 p-8 shadow-soft backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-900/70 lg:p-12">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">FAQ</p>
            <h2 className="section-title mt-3">Questions clients ask before hiring me.</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
                <button className="flex w-full items-center justify-between px-5 py-4 text-left" onClick={() => setActiveFaq(index === activeFaq ? -1 : index)}>
                  <span className="font-semibold">{faq.question}</span>
                  {index === activeFaq ? <X className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {index === activeFaq ? <p className="px-5 pb-5 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{faq.answer}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-zinc-200/70 bg-gradient-to-br from-emerald-500/10 via-white to-cyan-500/10 p-8 shadow-soft dark:border-zinc-800 dark:from-emerald-500/10 dark:via-zinc-900 dark:to-cyan-500/10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-500">Contact</p>
              <h2 className="section-title mt-3">Let&apos;s build your Shopify store.</h2>
              <p className="mt-4 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">Whether you need a redesign, development sprint, or full store setup, I can help you launch quickly and professionally.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://www.fiverr.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white shadow-soft transition hover:bg-emerald-600">Hire Me on Fiverr <ArrowRight className="ml-2 h-4 w-4" /></a>
                <a href="mailto:hello@shopifypro.com" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-6 py-3 font-semibold text-zinc-700 transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:text-zinc-200">Send Message</a>
              </div>
            </div>
            <form className="rounded-[1.75rem] border border-zinc-200 bg-white/80 p-6 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">
              <div className="grid gap-4">
                <input className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none ring-0 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950" placeholder="Your Name" />
                <input className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none ring-0 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950" placeholder="Your Email" />
                <textarea rows={5} className="rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 outline-none ring-0 transition focus:border-emerald-500 dark:border-zinc-800 dark:bg-zinc-950" placeholder="Project Details" />
                <button className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 font-semibold text-white transition hover:bg-emerald-600">Send Message <Send className="ml-2 h-4 w-4" /></button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {showBackToTop ? (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 z-40 rounded-full bg-emerald-500 p-3 text-white shadow-soft transition hover:bg-emerald-600">
          <ArrowUp className="h-5 w-5" />
        </button>
      ) : null}

      <footer className="border-t border-zinc-200 bg-white/80 px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950/80 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Shopify<span className="text-gradient">Pro</span></p>
            <p className="mt-2 text-sm text-zinc-500">Premium Shopify Developer for modern ecommerce brands.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-300">
            {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-emerald-500">{item}</a>)}
          </div>
          <div className="flex gap-3">
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-200 p-2.5 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-800"><Briefcase className="h-4 w-4" /></a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-200 p-2.5 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-800"><Github className="h-4 w-4" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-200 p-2.5 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-800"><Instagram className="h-4 w-4" /></a>
            <a href="https://www.fiverr.com" target="_blank" rel="noreferrer" className="rounded-full border border-zinc-200 p-2.5 transition hover:border-emerald-500 hover:text-emerald-500 dark:border-zinc-800"><Briefcase className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="mx-auto mt-6 max-w-7xl border-t border-zinc-200 pt-6 text-center text-sm text-zinc-500 dark:border-zinc-800">© 2026 ShopifyPro. All rights reserved.</div>
      </footer>
    </main>
  );
}

function ShoppingBag(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M6 8h12l-1 12H7L6 8Z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></svg>;
}

function CreditCard(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 10h18" /></svg>;
}

function TrendingUp(props: React.SVGProps<SVGSVGElement>) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 17L9 11l4 4 5-8" /><path d="M16 7h5v5" /></svg>;
}

function AnimatedCounter({ value, label, suffix, delay }: { value: number; label: string; suffix: string; delay: number }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const duration = 1200;
    const startTime = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value, delay]);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay }} className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 text-center shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <div className="text-3xl font-semibold text-emerald-500">{display}{suffix}</div>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{label}</p>
    </motion.div>
  );
}
