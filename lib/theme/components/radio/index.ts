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
      input: object;
    };
    sizes: {
      sm: { outer: string; dot: string };
      md: { outer: string; dot: string };
      lg: { outer: string; dot: string };
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
        gap: "gap-2",
        disabled:
          "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
      },
      label: {
        select: "select-none",
      },
      input: {
        base: "peer appearance-none accent-transparent rounded-full border transition-colors duration-200",
        focus: "focus:outline-none focus:ring-2 focus:ring-offset-1 rounded-full",
      },
    },
    sizes: {
      sm: { outer: "w-4 h-4", dot: "w-2 h-2" },
      md: { outer: "w-5 h-5", dot: "w-2.5 h-2.5" },
      lg: { outer: "w-6 h-6", dot: "w-3 h-3" },
    },
    colors: radioFilled,
  },
};

export type { TRadioClassname, TRadioColors, TRadioSize };

