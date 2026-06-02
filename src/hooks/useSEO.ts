import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
}

export const useSEO = ({ title, description, canonical, ogImage }: SEOProps) => {
  useEffect(() => {
    if (title) {
      document.title = title;
      document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
      document.querySelector('meta[property="twitter:title"]')?.setAttribute('content', title);
      document.querySelector('meta[name="title"]')?.setAttribute('content', title);
    }

    if (description) {
      document.querySelector('meta[name="description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
      document.querySelector('meta[property="twitter:description"]')?.setAttribute('content', description);
    }

    if (canonical) {
      const link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (link) link.href = canonical;
    }

    if (ogImage) {
      document.querySelector('meta[property="og:image"]')?.setAttribute('content', ogImage);
      document.querySelector('meta[property="twitter:image"]')?.setAttribute('content', ogImage);
    }
  }, [title, description, canonical, ogImage]);
};
