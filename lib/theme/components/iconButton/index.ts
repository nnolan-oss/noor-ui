import {
  type TIconButtonClassname,
  type TIconButtonColors,
  type TIconButtonSize,
  type TIconButtonVariant,
} from "../../../types/components/iconButton";
import { themeColors, type TColors } from "../../../types/generic";
import { iconButtonFilled } from "./iconButtonFilled";
import { iconButtonGradient } from "./iconButtonGradient";
import { iconButtonOutlined } from "./iconButtonOutlined";
import { iconButtonText } from "./iconButtonText";

export interface IIconButtonStyleTypes {
  defaultProps: {
    variant: TIconButtonVariant;
    size: TIconButtonSize;
    color: TIconButtonColors;
    className: TIconButtonClassname;
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
      sm: object;
      md: object;
      lg: object;
    };
    variants: {
      filled: typeof iconButtonFilled;
      gradient: typeof iconButtonGradient;
      outlined: typeof iconButtonOutlined;
      text: typeof iconButtonText;
    };
  };
}

export const iconButton: IIconButtonStyleTypes = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "primary",
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
        display: "inline-flex",
        alignItems: "items-center",
        justifyContent: "justify-center",
        verticalAlign: "align-middle",
        userSelect: "select-none",
        fontFamily: "font-sans",
        fontWeight: "font-medium",
        textAlign: "text-center",
        textTransform: "uppercase",
        transition: "transition-all",
        borderRadius: "rounded-xl",
        aspectRatio: "aspect-square",
        fontSize: "!text-xl",
        disabled:
          "disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none",
      },
    },
    sizes: {
      sm: {
        height: "h-[var(--noor-form-h-sm)]",
        fontSize: "text-xs",
        borderRadius: "rounded-xl",
      },
      md: {
        height: "h-[var(--noor-form-h-md)]",
        fontSize: "text-sm",
        borderRadius: "rounded-xl",
      },
      lg: {
        height: "h-[var(--noor-form-h-lg)]",
        fontSize: "text-md",
        borderRadius: "rounded-xl",
      },
    },
    variants: {
      filled: iconButtonFilled,
      gradient: iconButtonGradient,
      outlined: iconButtonOutlined,
      text: iconButtonText,
    },
  },
};
