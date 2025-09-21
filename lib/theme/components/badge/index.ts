import {
  type TBadgeClassname,
  type TBadgeColors,
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
        fontWeight: "font-medium",
        fontSize: "text-xs",
        textAlign: "text-center",
        transition: "transition-all",
        borderRadius: "rounded-lg",
        whiteSpace: "whitespace-nowrap",
        padding: "px-2 py-1"
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
