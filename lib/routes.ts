const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function routePath(path: string): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${BASE}${clean}`;
}
