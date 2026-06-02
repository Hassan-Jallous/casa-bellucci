import { SITE } from './site';

interface WordPressPage {
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  modified: string;
}

export interface LegalPageContent {
  title: string;
  html: string;
  modified: string;
  sourceUrl: string;
}

function stripWordPressChrome(html: string): string {
  return html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[\s\S]*?<\/style>/gi, '')
    .replace(/<iframe\b[\s\S]*?<\/iframe>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\sclass="wp-block-[^"]*"/g, '')
    .replace(/\sclass="has-[^"]*"/g, '')
    .replace(/\sstyle="[^"]*"/g, '')
    .trim();
}

export async function getWordPressPage(slug: string): Promise<LegalPageContent> {
  const url = `${SITE.sourceUrl}/wp-json/wp/v2/pages?slug=${encodeURIComponent(
    slug
  )}&_fields=slug,title,content.rendered,modified`;
  const res = await fetch(url, { cache: 'force-cache' });

  if (!res.ok) {
    throw new Error(`Could not fetch WordPress page "${slug}": ${res.status}`);
  }

  const pages = (await res.json()) as WordPressPage[];
  const page = pages[0];

  if (!page) {
    throw new Error(`WordPress page "${slug}" not found`);
  }

  return {
    title: page.title.rendered,
    html: stripWordPressChrome(page.content.rendered),
    modified: page.modified,
    sourceUrl: `${SITE.sourceUrl}/${slug}/`,
  };
}
