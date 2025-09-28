import {
  type TProgressClassname,
  type TProgressColors,
  type TProgressSize,
  type TProgressVariant,
} from "../../../types/components/progress";
import { themeColors, type TColors } from "../../../types/generic";
import { progressFilled } from "./progressFilled";
import { progressOutlined } from "./progressOutlined";
import { progressText } from "./progressText";

export interface IProgressStyleTypes {
  defaultProps: {
    variant: TProgressVariant;
    size: TProgressSize;
    color: TProgressColors;
    className: TProgressClassname;
  };
  valid: {
    variants: string[];
    sizes: string[];
    colors: TColors[];
  };
  styles: {
    base: {
      container: object;
      bar: object;
      label: object;
      value: object;
    };
    sizes: {
      sm: object;
      md: object;
      lg: object;
    };
    variants: {
      filled: typeof progressFilled;
      outlined: typeof progressOutlined;
      text: typeof progressText;
    };
  };
}

export const progress: IProgressStyleTypes = {
  defaultProps: {
    variant: "filled",
    size: "md",
    color: "primary",
    className: "",
  },
  valid: {
    variants: ["filled", "outlined", "text"],
    sizes: ["sm", "md", "lg"],
    colors: [...themeColors],
  },
  styles: {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        height: "h-2",
        backgroundColor: "bg-gray-200",
        borderRadius: "rounded-full",
        overflow: "overflow-hidden",
      },
      bar: {
        position: "absolute",
        top: "top-0",
        left: "left-0",
        height: "h-full",
        backgroundColor: "bg-primary-500",
        borderRadius: "rounded-full",
        transition: "transition-all duration-300 ease-in-out",
      },
      label: {
        fontSize: "text-sm",
        fontWeight: "font-medium",
        color: "text-gray-700",
        marginBottom: "mb-1",
      },
      value: {
        fontSize: "text-xs",
        fontWeight: "font-medium",
        color: "text-primary-500",
        marginTop: "mt-1",
      },
    },
    sizes: {
      sm: {
        height: "h-1",
        fontSize: "text-xs",
        labelFontSize: "text-xs",
        valueFontSize: "text-xs",
      },
      md: {
        height: "h-2",
        fontSize: "text-sm",
        labelFontSize: "text-sm",
        valueFontSize: "text-xs",
      },
      lg: {
        height: "h-3",
        fontSize: "text-base",
        labelFontSize: "text-base",
        valueFontSize: "text-sm",
      },
    },
    variants: {
      filled: progressFilled,
      outlined: progressOutlined,
      text: progressText,
    },
  },
};
