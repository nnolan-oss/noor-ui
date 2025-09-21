import {
  type TLoaderClassname,
  type TLoaderColors,
  type TLoaderSize,
  type TLoaderVariant,
} from "../../../types/components/loader";
import { themeColors, type TColors } from "../../../types/generic";
import { loaderSpinner } from "./loaderSpinner";
import { loaderDots } from "./loaderDots";
import { loaderPulse } from "./loaderPulse";
import { loaderBars } from "./loaderBars";

export interface ILoaderStyleTypes {
  defaultProps: {
    variant: TLoaderVariant;
    size: TLoaderSize;
    color: TLoaderColors;
    className: TLoaderClassname;
  };
  valid: {
    variants: string[];
    sizes: string[];
    colors: TColors[];
  };
  styles: {
    base: {
      initial: object;
    };
    sizes: {
      xs: object;
      sm: object;
      md: object;
      lg: object;
      xl: object;
    };
    variants: {
      spinner: typeof loaderSpinner;
      dots: typeof loaderDots;
      pulse: typeof loaderPulse;
      bars: typeof loaderBars;
    };
  };
}

export const loader: ILoaderStyleTypes = {
  defaultProps: {
    variant: "spinner",
    size: "md",
    color: "primary",
    className: "",
  },
  valid: {
    variants: ["spinner", "dots", "pulse", "bars"],
    sizes: ["xs", "sm", "md", "lg", "xl"],
    colors: [...themeColors],
  },
  styles: {
    base: {
      initial: {
        display: "inline-flex",
        alignItems: "items-center",
        justifyContent: "justify-center",
      },
    },
    sizes: {
      xs: {
        width: "w-4",
        height: "h-4",
        fontSize: "text-xs",
      },
      sm: {
        width: "w-5",
        height: "h-5",
        fontSize: "text-sm",
      },
      md: {
        width: "w-6",
        height: "h-6",
        fontSize: "text-base",
      },
      lg: {
        width: "w-8",
        height: "h-8",
        fontSize: "text-lg",
      },
      xl: {
        width: "w-12",
        height: "h-12",
        fontSize: "text-xl",
      },
    },
    variants: {
      spinner: loaderSpinner,
      dots: loaderDots,
      pulse: loaderPulse,
      bars: loaderBars,
    },
  },
};
