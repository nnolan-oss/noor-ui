import { button } from "./components/button";
import { themeTypography } from "./base/typography";
import { themeSpacing } from "./base/spacing";
import { themeBreakpoints } from "./base/breakpoints";
import { themeZIndex } from "./base/zIndex";
import { themeColors } from "./base/colors";
import { themeShadows } from "./base/shadow";

export const theme = {
  components: {
    button,
  },
  typography: themeTypography,
  spacing: themeSpacing,
  breakpoints: themeBreakpoints,
  zIndex: themeZIndex,
  colors: themeColors,
  shadows: themeShadows,
};

export * from "./components/button";
export * from "./base/typography";
export * from "./base/spacing";
export * from "./base/breakpoints";
export * from "./base/zIndex";
export * from "./base/colors";
export * from "./base/shadow";
