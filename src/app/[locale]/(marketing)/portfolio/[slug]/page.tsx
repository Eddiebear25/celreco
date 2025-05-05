// src/app/[locale]/(marketing)/portfolio/[slug]/page.tsx
import { notFound } from 'next/navigation';

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

export default function PortfolioItemPage({ params }: Props) {
  // Your page implementation here
  return (
    <div>
      <h1>Portfolio Item: {params.slug}</h1>
      <p>Locale: {params.locale}</p>
      {/* Your content */}
    </div>
  );
}

// Optional: If you need dynamic metadata
export async function generateMetadata({ params }: Props) {
  return {
    title: `Portfolio Item ${params.slug} | ${params.locale.toUpperCase()}`,
  };
}
