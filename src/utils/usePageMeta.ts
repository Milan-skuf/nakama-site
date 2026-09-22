import { useEffect } from 'react';

const SITE_ORIGIN = 'https://nakama.ru';

function setMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

function setCanonicalLink(pathname: string) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', `${SITE_ORIGIN}${pathname === '/' ? '' : pathname}`);
}

/** Sets the document title, description (incl. OG/Twitter mirrors) and canonical URL for the current route. */
export function usePageMeta(title: string, description: string, options?: { noindex?: boolean }) {
  useEffect(() => {
    document.title = title;
    setMetaTag('description', description);
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setCanonicalLink(window.location.pathname);
    setMetaTag('robots', options?.noindex ? 'noindex, nofollow' : 'index, follow');
  }, [title, description, options?.noindex]);
}
