import { button } from "./components/button";
import { badge } from "./components/badge";
import { iconButton } from "./components/iconButton";
import { loader } from "./components/loader";
import { input } from "./components/input";

export const theme = {
  components: {
    button,
    badge,
    iconButton,
    loader,
    input,
  },
  typography: {},
  spacing: {},
  breakpoints: {},
  zIndex: {},
  colors: {},
  shadows: {
    default: "none"
  },
};

export * from "./components/button";
export * from "./components/badge";
export * from "./components/iconButton";
export * from "./components/loader";
export * from "./components/input";
