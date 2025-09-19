import {
  type TButtonClassname,
  type TButtonColors,
  type TButtonFullWidth,
  type TButtonSize,
  type TButtonVariant,
} from "../../../types/components/button";
import { buttonFilled } from "./buttonFilled";
import { buttonGradient } from "./buttonGradient";
import { buttonOutlined } from "./buttonOutlined";
import { buttonText } from "./buttonText";

export interface IButtonStyleTypes {
  defaultProps?: {
    variant?: TButtonVariant;
    size?: TButtonSize;
    color?: TButtonColors;
    fullWidth?: TButtonFullWidth;
    className?: TButtonClassname;
  };
  valid?: {
    variants?: string[];
    sizes?: string[];
    colors?: string[];
  };
  styles?: {
    base?: {
      initial?: object;
      fullWidth?: object;
    };
    sizes?: {
      sm?: object;
      md?: object;
      lg?: object;
    };
    variants?: {
      filled?: typeof buttonFilled;
      gradient?: typeof buttonGradient;
      outlined?: typeof buttonOutlined;
      text?: typeof buttonText;
    };
  };
}

export const button: IButtonStyleTypes = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "black",
    fullWidth: false,
    className: "",
  },
  valid: {
    variants: ["filled", "gradient", "outlined", "text"],
    sizes: ["sm", "md", "lg"],
    colors: ["black", "white", "gray", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"],
  },
  styles: {
    base: {
      initial: {
        verticalAlign: "align-middle",
        userSelect: "select-none",
        fontFamily: "font-sans",
        fontWeight: "font-bold",
        textAlign: "text-center",
        textTransform: "uppercase",
        transition: "transition-all",
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
        fontSize: "text-xs",
        py: "py-2",
        px: "px-4",
        borderRadius: "rounded-lg",
      },
      md: {
        fontSize: "text-xs",
        py: "py-3",
        px: "px-6",
        borderRadius: "rounded-lg",
      },
      lg: {
        fontSize: "text-sm",
        py: "py-3.5",
        px: "px-7",
        borderRadius: "rounded-lg",
      },
    },
    variants: {
      filled: buttonFilled,
      gradient: buttonGradient,
      outlined: buttonOutlined,
      text: buttonText,
    },
  },
};
