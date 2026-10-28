import { MetadataRoute } from 'next';
import { solutions } from '@/data/solutions';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.glocious.com';

  const solutionRoutes: MetadataRoute.Sitemap = solutions.map((solution) => ({
    url: `${baseUrl}/solutions/${solution.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    ...solutionRoutes,
  ];
}
