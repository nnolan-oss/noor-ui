import {
  type TPopoverClassname,
  type TPopoverColor,
  type TPopoverSize,
  type TPopoverVariant,
} from "../../../types/components/popover";
import { themeColors, type TColors } from "../../../types/generic";
import { popoverDefault } from "./popoverDefault";
import { popoverBordered } from "./popoverBordered";
import { popoverElevated } from "./popoverElevated";
import { popoverFilled } from "./popoverFilled";

export interface IPopoverStyleTypes {
  defaultProps: {
    variant: TPopoverVariant;
    size: TPopoverSize;
    color: TPopoverColor;
    className: TPopoverClassname;
    open: boolean;
    defaultOpen: boolean;
    trigger: "click" | "hover" | "focus" | "manual";
    placement: string;
    offset: number;
    arrow: boolean;
    closeOnEscape: boolean;
    closeOnOutsideClick: boolean;
    portal: boolean;
    disabled: boolean;
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
      default: typeof popoverDefault;
      bordered: typeof popoverBordered;
      elevated: typeof popoverElevated;
      filled: typeof popoverFilled;
    };
  };
}

export const popover: IPopoverStyleTypes = {
  defaultProps: {
    variant: "default",
    size: "md",
    color: "primary",
    className: "",
    open: false,
    defaultOpen: false,
    trigger: "click",
    placement: "bottom",
    offset: 8,
    arrow: true,
    closeOnEscape: true,
    closeOnOutsideClick: true,
    portal: true,
    disabled: false,
  },
  valid: {
    variants: ["default", "bordered", "elevated", "filled"],
    sizes: ["sm", "md", "lg"],
    colors: [...themeColors],
  },
  styles: {
    base: {
      initial: {
        display: "block",
        width: "w-full",
        position: "relative",
      },
    },
    sizes: {
      sm: {
        fontSize: "text-sm",
        padding: "p-3",
        borderRadius: "rounded-md",
        minWidth: "min-w-[6rem]",
      },
      md: {
        fontSize: "text-base",
        padding: "p-4",
        borderRadius: "rounded-lg",
        minWidth: "min-w-[8rem]",
      },
      lg: {
        fontSize: "text-lg",
        padding: "p-5",
        borderRadius: "rounded-xl",
        minWidth: "min-w-[10rem]",
      },
    },
    variants: {
      default: popoverDefault,
      bordered: popoverBordered,
      elevated: popoverElevated,
      filled: popoverFilled,
    },
  },
};
