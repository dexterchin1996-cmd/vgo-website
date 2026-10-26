export const dynamic = "force-static";

import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://vgoservice.com';
  return {
    rules: [
      { userAgent: '*', allow: '/', disallow: ['/verify-success', '/verify-failed', '/api/'] },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'OAI-SearchBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
    ],
    sitemap: base + '/sitemap.xml',
  };
}
