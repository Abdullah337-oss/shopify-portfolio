import { notFound } from 'next/navigation';
import { DemoStoreShell } from '@/components/demo-store-shell';
import { portfolioProjects } from '@/data/portfolio-projects';

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }));
}

export default function DemoStorePage({ params }: { params: { slug: string } }) {
  const project = portfolioProjects.find((item) => item.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <DemoStoreShell store={project.store} />;
}
