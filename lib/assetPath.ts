const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  const clean = path.replace(/^\.?\//, '');
  return `${BASE}/${clean}`;
}
