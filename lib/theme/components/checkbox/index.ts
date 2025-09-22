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
    sizes: string[];
    colors: TColors[];
  };
  styles: {
    base: {
      initial: object;
      label: object;
    };
    sizes: {
      sm: { box: string; icon: string };
      md: { box: string; icon: string };
      lg: { box: string; icon: string };
    };
    colors: typeof checkboxFilled;
  };
}

export const checkbox: ICheckboxStyleTypes = {
  defaultProps: {
    size: "md",
    color: "primary",
    className: "",
  },
  valid: {
    sizes: ["sm", "md", "lg"],
    colors: [...themeColors],
  },
  styles: {
    base: {
      initial: {
        display: "flex",
        alignItems: "items-center",
        cursor: "cursor-pointer",
        gap: "gap-1",
        disabled:
          "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
      },
      label: {
        select: "select-none",
      },
    },
    sizes: {
      sm: { box: "w-4 h-4", icon: "w-4 h-4" },
      md: { box: "w-5 h-5", icon: "w-5 h-5" },
      lg: { box: "w-6 h-6", icon: "w-6 h-6" },
    },
    colors: checkboxFilled,
  },
};

export type { TCheckboxClassname, TCheckboxColors, TCheckboxSize };

