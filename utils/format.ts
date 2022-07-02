export function formatSlug(string: string): string {
  return string
    .toLowerCase()
    .trim()
    .replace(/\s+|-+/gu, '-') // Replace spaces with -
    .replace(/[^\s\w-]/giu, ''); // Remove all non-word chars
}
