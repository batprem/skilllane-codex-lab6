// Some used, some unused

export function isEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export function isPhone(s: string): boolean {
  return /^0\d{8,9}$/.test(s);
}

// UNUSED — replaced by zod schemas elsewhere
export function isStrongPassword(s: string): boolean {
  return s.length >= 12 && /[A-Z]/.test(s) && /[0-9]/.test(s) && /[^a-zA-Z0-9]/.test(s);
}
