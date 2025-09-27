import {
  type TContainerClassname,
  type TContainerPadding,
  type TContainerMargin,
  type TContainerSize,
  type TContainerVariant,
} from "../../../types/components/container";
import { containerDefault } from "./containerDefault";
import { containerFluid } from "./containerFluid";
import { containerBordered } from "./containerBordered";
import { containerElevated } from "./containerElevated";

export interface IContainerStyleTypes {
  defaultProps: {
    variant: TContainerVariant;
    size: TContainerSize;
    padding: TContainerPadding;
    margin: TContainerMargin;
    className: TContainerClassname;
  };
  valid: {
    variants: string[];
    sizes: string[];
    paddings: string[];
    margins: string[];
  };
  styles: {
    base: {
      initial: object;
    };
    sizes: {
      sm: object;
      md: object;
      lg: object;
      xl: object;
      "2xl": object;
    };
    variants: {
      default: typeof containerDefault;
      fluid: typeof containerFluid;
      bordered: typeof containerBordered;
      elevated: typeof containerElevated;
    };
    paddings: {
      none: object;
      sm: object;
      md: object;
      lg: object;
      xl: object;
    };
    margins: {
      none: object;
      sm: object;
      md: object;
      lg: object;
      xl: object;
    };
  };
}

export const container: IContainerStyleTypes = {
  defaultProps: {
    variant: "default",
    size: "lg",
    padding: "md",
    margin: "none",
    className: "",
  },
  valid: {
    variants: ["default", "fluid", "bordered", "elevated"],
    sizes: ["sm", "md", "lg", "xl", "2xl"],
    paddings: ["none", "sm", "md", "lg", "xl"],
    margins: ["none", "sm", "md", "lg", "xl"],
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
        maxWidth: "max-w-sm",
      },
      md: {
        maxWidth: "max-w-md",
      },
      lg: {
        maxWidth: "max-w-lg",
      },
      xl: {
        maxWidth: "max-w-xl",
      },
      "2xl": {
        maxWidth: "max-w-2xl",
      },
    },
    variants: {
      default: containerDefault,
      fluid: containerFluid,
      bordered: containerBordered,
      elevated: containerElevated,
    },
    paddings: {
      none: {
        padding: "p-0",
      },
      sm: {
        padding: "p-2",
      },
      md: {
        padding: "p-4",
      },
      lg: {
        padding: "p-6",
      },
      xl: {
        padding: "p-8",
      },
    },
    margins: {
      none: {
        margin: "m-0",
      },
      sm: {
        margin: "m-2",
      },
      md: {
        margin: "m-4",
      },
      lg: {
        margin: "m-6",
      },
      xl: {
        margin: "m-8",
      },
    },
  },
};
