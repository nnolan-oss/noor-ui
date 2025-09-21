import {
  type TSwitchClassname,
  type TSwitchColors,
  type TSwitchSize,
} from "../../../types/components/switch";
import { themeColors, type TColors } from "../../../types/generic";
import { switchFilled } from "./switchFilled";

export interface ISwitchStyleTypes {
  defaultProps: {
    size: TSwitchSize;
    color: TSwitchColors;
    className: TSwitchClassname;
    fullWidth: boolean;
  };
  valid: {
    variants: string[];
    sizes: string[];
    colors: TColors[];
  };
  styles: {
    base: {
      initial: object;
      fullWidth: object;
    };
    sizes: {
      sm: { track: string; thumb: string; thumbChecked: string };
      md: { track: string; thumb: string; thumbChecked: string };
      lg: { track: string; thumb: string; thumbChecked: string };
    };
    variants: {
      filled: typeof switchFilled;
    };
  };
}

export const switchTheme: ISwitchStyleTypes = {
  defaultProps: {
    size: "md",
    color: "primary",
    className: "",
    fullWidth: false,
  },
  valid: {
    variants: ["filled"],
    sizes: ["sm", "md", "lg"],
    colors: [...themeColors],
  },
  styles: {
    base: {
      initial: {
        display: "inline-flex",
        alignItems: "items-center",
        cursor: "cursor-pointer",
        transition: "transition-colors duration-300",
        rounded: "rounded-full",
        p: "p-0.5",
        disabled:
          "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
      },
      fullWidth: {
        display: "block",
        width: "w-full",
      },
    },
    sizes: {
      sm: {
        track: "w-9 h-5",
        thumb: "w-4 h-4",
        thumbChecked: "translate-x-4",
      },
      md: {
        track: "w-11 h-6",
        thumb: "w-5 h-5",
        thumbChecked: "translate-x-5",
      },
      lg: {
        track: "w-14 h-8",
        thumb: "w-7 h-7",
        thumbChecked: "translate-x-6",
      },
    },
    variants: {
      filled: switchFilled,
    },
  },
};
