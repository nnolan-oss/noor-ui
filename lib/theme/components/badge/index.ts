import {
  type TBadgeClassname,
  type TBadgeColors,
  type TBadgeSize,
  type TBadgeVariant,
} from "../../../types/components/badge";
import { themeColors, type TColors } from "../../../types/generic";
import { badgeFilled } from "./badgeFilled";
import { badgeGradient } from "./badgeGradient";
import { badgeOutlined } from "./badgeOutlined";
import { badgeText } from "./badgeText";

export interface IBadgeStyleTypes {
  defaultProps: {
    variant: TBadgeVariant;
    size: TBadgeSize;
    color: TBadgeColors;
    className: TBadgeClassname;
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
      filled: typeof badgeFilled;
      gradient: typeof badgeGradient;
      outlined: typeof badgeOutlined;
      text: typeof badgeText;
    };
  };
}

export const badge: IBadgeStyleTypes = {
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
        borderRadius: "rounded-full",
        whiteSpace: "whitespace-nowrap",
      },
    },
    sizes: {
      sm: {
        fontSize: "text-xs",
        py: "py-1",
        px: "px-2",
        minHeight: "min-h-[1.25rem]",
      },
      md: {
        fontSize: "text-sm",
        py: "py-1.5",
        px: "px-3",
        minHeight: "min-h-[1.5rem]",
      },
      lg: {
        fontSize: "text-base",
        py: "py-2",
        px: "px-4",
        minHeight: "min-h-[1.75rem]",
      },
    },
    variants: {
      filled: badgeFilled,
      gradient: badgeGradient,
      outlined: badgeOutlined,
      text: badgeText,
    },
  },
};
