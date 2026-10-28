import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',
        '/admin/',
        /* Legacy Parv-era demo routes — retained for reference but kept out of
           the index until they are rewritten with real Glocious content.
           /solutions/ is NOT disallowed: those pages are now real Glocious
           content and are listed in the sitemap. */
        '/get-started',
        '/services/',
        '/resources',
      ],
    },
    sitemap: 'https://www.glocious.com/sitemap.xml',
  };
}
