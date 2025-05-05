import { notFound } from 'next/navigation';

interface Props {
  params: {
    locale: string;
    slug: string;
  };
}

// (Optional) Dynamic metadata
export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug} | Portfolio`,
  };
}

export default async function PortfolioItemPage({ params }: Props) {
  // Server-side data fetching (replace with your actual data source)
  const item = await fetchPortfolioItem(params.slug, params.locale);

  if (!item) notFound();

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      {/* Client-side parts are moved to separate components (see below) */}
    </div>
  );
}

// Example data fetch (replace with your API/DB call)
async function fetchPortfolioItem(slug: string, locale: string) {
  return { 
    title: `Project ${slug}`, 
    description: `Locale: ${locale}` 
  };
}
