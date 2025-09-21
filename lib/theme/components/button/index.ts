import {
  type TButtonClassname,
  type TButtonColors,
  type TButtonFullWidth,
  type TButtonSize,
  type TButtonVariant,
} from "../../../types/components/button";
import { themeColors, type TColors } from "../../../types/generic";
import { buttonFilled } from "./buttonFilled";
import { buttonGradient } from "./buttonGradient";
import { buttonOutlined } from "./buttonOutlined";
import { buttonText } from "./buttonText";

export interface IButtonStyleTypes {
  defaultProps: {
    variant: TButtonVariant;
    size: TButtonSize;
    color: TButtonColors;
    fullWidth: TButtonFullWidth;
    className: TButtonClassname;
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
      sm: object;
      md: object;
      lg: object;
    };
    variants: {
      filled: typeof buttonFilled;
      gradient: typeof buttonGradient;
      outlined: typeof buttonOutlined;
      text: typeof buttonText;
    };
  };
}

export const button: IButtonStyleTypes = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "primary",
    fullWidth: false,
    className: "",
  },
  valid: {
    variants: ["filled", "gradient", "outlined", "text"],
    sizes: ["sm", "md", "lg"],
    colors: [...themeColors],
  },
  styles: {
    base: {
      initial: {
        verticalAlign: "align-middle",
        userSelect: "select-none",
        fontFamily: "font-sans",
        fontWeight: "font-medium",
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
        borderRadius: "rounded-xl",
      },
      md: {
        fontSize: "text-sm",
        py: "py-3",
        px: "px-6",
        borderRadius: "rounded-xl",
      },
      lg: {
        fontSize: "text-md",
        py: "py-3.5",
        px: "px-7",
        borderRadius: "rounded-xl",
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
