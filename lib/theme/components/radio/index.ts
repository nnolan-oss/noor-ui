import {
  type TRadioClassname,
  type TRadioColors,
  type TRadioSize,
} from "../../../types/components/radio";
import { themeColors, type TColors } from "../../../types/generic";
import { radioFilled } from "./radioFilled";

export interface IRadioStyleTypes {
  defaultProps: {
    size: TRadioSize;
    color: TRadioColors;
    className: TRadioClassname;
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
      sm: { outer: string; icon: string };
      md: { outer: string; icon: string };
      lg: { outer: string; icon: string };
    };
    colors: typeof radioFilled;
  };
}

export const radio: IRadioStyleTypes = {
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
        display: "inline-flex",
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
      sm: { outer: "w-4 h-4", icon: "w-4 h-4" },
      md: { outer: "w-5 h-5", icon: "w-5 h-5" },
      lg: { outer: "w-6 h-6", icon: "w-6 h-6" },
    },
    colors: radioFilled,
  },
};

export type { TRadioClassname, TRadioColors, TRadioSize };

