import { button } from "./components/button";
import { badge } from "./components/badge";
import { iconButton } from "./components/iconButton";
import { loader } from "./components/loader";
import { input } from "./components/input";
import { textarea } from "./components/textarea";
import {switchTheme} from "./components/switch"
import { checkbox } from "./components/checkbox";
import { radio } from "./components/radio";
import { accordion } from "./components/accordion";
import { popover } from "./components/popover";

export const theme = {
  components: {
    button,
    badge,
    iconButton,
    loader,
    input,
    textarea,
    switchTheme,
    checkbox,
    radio,
    accordion,
    popover
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
export * from "./components/textarea";
export * from "./components/switch"
export * from "./components/checkbox";
export * from "./components/radio";
export * from "./components/accordion";
export * from "./components/popover";
