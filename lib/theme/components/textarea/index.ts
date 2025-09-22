import {
  type TTextareaClassname,
  type TTextareaColors,
  type TTextareaDisabled,
  type TTextareaError,
  type TTextareaFullWidth,
  type TTextareaSize,
  type TTextareaSuccess,
  type TTextareaVariant,
} from "../../../types/components/textarea";
import { themeColors, type TColors } from "../../../types/generic";
import { textareaFilled } from "./textareaFilled";
import { textareaOutlined } from "./textareaOutlined";

export interface ITextareaStyleTypes {
  defaultProps: {
    variant: TTextareaVariant;
    size: TTextareaSize;
    color: TTextareaColors;
    fullWidth: TTextareaFullWidth;
    disabled: TTextareaDisabled;
    error: TTextareaError;
    success: TTextareaSuccess;
    className: TTextareaClassname;
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
      disabled: object;
      error: object;
      success: object;
    };
    sizes: {
      sm: object;
      md: object;
      lg: object;
    };
    variants: {
      filled: typeof textareaFilled;
      outlined: typeof textareaOutlined;
    };
  };
}

export const textarea: ITextareaStyleTypes = {
  defaultProps: {
    variant: "outlined",
    size: "md",
    color: "primary",
    fullWidth: false,
    disabled: false,
    error: false,
    success: false,
    className: "",
  },
  valid: {
    variants: ["filled", "outlined"],
    sizes: ["sm", "md", "lg"],
    colors: [...themeColors],
  },
  styles: {
    base: {
      initial: {
        display: "block",
        width: "w-full",
        fontSize: "text-sm",
        fontFamily: "font-sans",
        borderRadius: "rounded-xl",
        transition: "transition-all duration-200",
        outline: "outline-none",
        appearance: "appearance-none",
        border: "border",
        focus: "focus:outline-none focus:ring-2 focus:ring-offset-0",
      },
      fullWidth: {
        width: "w-full",
      },
      disabled: {
        opacity: "opacity-50",
        cursor: "cursor-not-allowed",
        pointerEvents: "pointer-events-none",
      },
      error: {
        borderColor: "border-red-500",
        focusRing: "focus:ring-red-500/20",
      },
      success: {
        borderColor: "border-green-500",
        focusRing: "focus:ring-green-500/20",
      },
    },
    sizes: {
      sm: {
        fontSize: "text-xs",
        padding: "px-3 py-2",
        minHeight: "min-h-[var(--noor-form-h-sm)]",
        borderRadius: "rounded-[var(--noor-radius)]",
      },
      md: {
        fontSize: "text-sm",
        padding: "px-3 py-3",
        minHeight: "min-h-[var(--noor-form-h-md)]",
        borderRadius: "rounded-[var(--noor-radius)]",
      },
      lg: {
        fontSize: "text-md",
        padding: "px-4 py-3.5",
        minHeight: "min-h-[var(--noor-form-h-lg)]",
        borderRadius: "rounded-[var(--noor-radius)]",
      },
    },
    variants: {
      filled: textareaFilled,
      outlined: textareaOutlined,
    },
  },
};


