import { type theme } from "../theme";

// For optional theme types
type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type Theme = typeof theme;
export type ThemeConfig = DeepPartial<Theme>;
