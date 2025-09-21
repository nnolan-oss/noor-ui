/**
 * Theme global types
 */

// Theme colors
export const themeColors = [
  "primary",
  "secondary",
  "success",
  "error",
  "info",
  "warning",
  "white",
] as const;

// Type is inferred as union of those values
export type TColors = typeof themeColors[number];
