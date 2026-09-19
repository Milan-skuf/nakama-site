import { useEffect } from 'react';

function setMetaTag(name: string, content: string, attr: 'name' | 'property' = 'name') {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

/** Sets the document title and description (incl. OG/Twitter mirrors) for the current route. */
export function usePageMeta(title: string, description: string) {
  useEffect(() => {
    document.title = title;
    setMetaTag('description', description);
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
  }, [title, description]);
}
