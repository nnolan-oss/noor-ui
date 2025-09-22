import {
  type TCheckboxClassname,
  type TCheckboxColors,
  type TCheckboxSize,
} from "../../../types/components/checkbox";
import { themeColors, type TColors } from "../../../types/generic";
import { checkboxFilled } from "./checkboxFilled";

export interface ICheckboxStyleTypes {
  defaultProps: {
    size: TCheckboxSize;
    color: TCheckboxColors;
    className: TCheckboxClassname;
  };
  valid: {
    variants: string[];
    sizes: string[];
    colors: TColors[];
  };
  styles: {
    base: {
      initial: object;
      label: object;
      input: object;
    };
    sizes: {
      sm: { box: string; icon: string };
      md: { box: string; icon: string };
      lg: { box: string; icon: string };
    };
    variants: {
      filled: typeof checkboxFilled;
    };
  };
}

export const checkbox: ICheckboxStyleTypes = {
  defaultProps: {
    size: "md",
    color: "primary",
    className: "",
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
        gap: "gap-2",
        disabled:
          "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
      },
      label: {
        select: "select-none",
      },
      input: {
        base: "peer appearance-none w-5 h-5 rounded border transition-colors duration-200",
        focus: "focus:outline-none focus:ring-2 focus:ring-offset-1",
      },
    },
    sizes: {
      sm: { box: "w-4 h-4", icon: "w-3 h-3" },
      md: { box: "w-5 h-5", icon: "w-3.5 h-3.5" },
      lg: { box: "w-6 h-6", icon: "w-4 h-4" },
    },
    variants: {
      filled: checkboxFilled,
    },
  },
};

export type { TCheckboxClassname, TCheckboxColors, TCheckboxSize };

