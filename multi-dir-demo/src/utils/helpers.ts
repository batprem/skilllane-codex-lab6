// Intentionally has unused exports — for Lab 6B subagent to find

export function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export function slugify(text: string): string {
  return text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

// UNUSED — never imported anywhere
export function deprecatedHash(input: string): string {
  let h = 0;
  for (let i = 0; i < input.length; i++) h = (h * 31 + input.charCodeAt(i)) | 0;
  return h.toString(16);
}

// UNUSED — never imported
export function legacyParseQuery(query: string): Record<string, string> {
  const result: Record<string, string> = {};
  query.split("&").forEach(pair => {
    const [k, v] = pair.split("=");
    result[k] = decodeURIComponent(v ?? "");
  });
  return result;
}

// UNUSED
export const OBSOLETE_FLAGS = ["--legacy", "--v1", "--debug-old"];
