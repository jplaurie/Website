export function normalizePath(path: string): string {
  const pathname = path.split(/[?#]/, 1)[0]
    .replace(/\/index\.html$/, '/')
    .replace(/\.html$/, '');

  return pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
}
