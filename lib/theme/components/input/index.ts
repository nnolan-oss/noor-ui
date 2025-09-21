import {
  type TInputClassname,
  type TInputColors,
  type TInputDisabled,
  type TInputError,
  type TInputFullWidth,
  type TInputSize,
  type TInputSuccess,
  type TInputVariant,
} from "../../../types/components/input";
import { themeColors, type TColors } from "../../../types/generic";
import { inputFilled } from "./inputFilled";
import { inputOutlined } from "./inputOutlined";

export interface IInputStyleTypes {
  defaultProps: {
    variant: TInputVariant;
    size: TInputSize;
    color: TInputColors;
    fullWidth: TInputFullWidth;
    disabled: TInputDisabled;
    error: TInputError;
    success: TInputSuccess;
    className: TInputClassname;
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
      filled: typeof inputFilled;
      outlined: typeof inputOutlined;
    };
  };
}

export const input: IInputStyleTypes = {
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
        height: "h-[var(--noor-form-h-sm)]",
        borderRadius: "rounded-[var(--noor-radius)]",
      },
      md: {
        fontSize: "text-sm",
        padding: "px-3 py-3",
        height: "h-[var(--noor-form-h-md)]",
        borderRadius: "rounded-[var(--noor-radius)]",
      },
      lg: {
        fontSize: "text-md",
        padding: "px-4 py-3.5",
        height: "h-[var(--noor-form-h-lg)]",
        borderRadius: "rounded-[var(--noor-radius)]",
      },
    },
    variants: {
      filled: inputFilled,
      outlined: inputOutlined,
    },
  },
};
