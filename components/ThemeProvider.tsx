'use client'

// Theme is fixed to light — matching the Hiwot portfolio aesthetic.
// This stub is kept so existing imports don't break.
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}

export function useTheme() {
  return { theme: 'light' as const, toggleTheme: () => {} }
}
