import {
  type TAccordionClassname,
  type TAccordionColor,
  type TAccordionSize,
  type TAccordionVariant,
} from "../../../types/components/accordion";
import { themeColors, type TColors } from "../../../types/generic";
import { accordionDefault } from "./accordionDefault";

export interface IAccordionStyleTypes {
  defaultProps: {
    variant: TAccordionVariant;
    size: TAccordionSize;
    color: TAccordionColor;
    className: TAccordionClassname;
    multiple: boolean;
    collapsible: boolean;
    type: "single" | "multiple";
  };
  valid: {
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
      default: typeof accordionDefault;
    };
  };
}

export const accordion: IAccordionStyleTypes = {
  defaultProps: {
    variant: "default",
    size: "md",
    color: "primary",
    className: "",
    multiple: false,
    collapsible: true,
    type: "single",
  },
  valid: {
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
        borderRadius: "rounded-md",
      },
      md: {
        fontSize: "text-base",
        borderRadius: "rounded-lg",
      },
      lg: {
        fontSize: "text-lg",
        borderRadius: "rounded-xl",
      },
    },
    variants: {
      default: accordionDefault,
    },
  },
};
