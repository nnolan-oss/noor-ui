import {
    type TAvatarClassname,
    type TAvatarColors,
    type TAvatarVariant,
    type TAvatarBordered,
    type TAvatarSize,
    type TAvatarBorderColor
  } from "../../../types/components/avatar";
  import { themeColors, type TColors } from "../../../types/generic";
  
  export interface IAvatarStyleTypes {
    defaultProps: {
      variant: TAvatarVariant;
      size: TAvatarSize;
      color: TAvatarColors;
      bordered: TAvatarBordered;
      borderColor: TAvatarBorderColor;
      className: TAvatarClassname;
    };
    valid: {
      variants: string[];
      sizes: string[];
      colors: TColors[];
      borderColors: TColors[];
    };
    styles: {
      base: {
        initial: object;
        bordered: object;
      };
      variants: {
        rounded: string;
        circle: string;
        square: string;
      };
      sizes: {
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        xxl: string;
      };
      borderColors: {
        primary: string;
        secondary: string;
        success: string;
        error: string;
        info: string;
        warning: string;
        white: string;
      };
    };
  }
  
  export const avatar: IAvatarStyleTypes = {
    defaultProps: {
      variant: "circle",
      size: "md",
      color: "primary",
      bordered: false,
      borderColor: "primary",
      className: "",
    },
    valid: {
      variants: ["rounded", "square", "circle"],
      sizes: ["xs", "sm", "md", "lg", "xl", "xxl"],
      colors: [...themeColors],
      borderColors: [...themeColors],
    },
    styles: {
      base: {
        initial: {
          display: "flex",
          alignItems: "items-center",
          justifyContent: "justify-center",
          overflow: "overflow-hidden",
          backgroundColor: "bg-[var(--noor-color-primary)]/10",
          color: "text-[var(--noor-color-primary)]",
          fontWeight: "font-medium",
        },
        bordered: {
          borderWidth: "border-2",
          borderStyle: "border-solid",
          background: "bg-transparent",
          padding: "p-0.5"
        },
      },
      variants: {
        rounded: "rounded-lg",
        square: "rounded-none",
        circle: "rounded-full",
      },
      sizes: {
        xs: "w-6 h-6 text-xs",
        sm: "w-8 h-8 text-sm",
        md: "w-10 h-10 text-base",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl",
        xxl: "w-20 h-20 text-2xl",
      },
      borderColors: {
        primary: "border-[var(--noor-color-primary)] text-[var(--noor-color-primary)]",
        secondary: "border-[var(--noor-color-secondary)] text-[var(--noor-color-secondary)]",
        success: "border-[var(--noor-color-success)] text-[var(--noor-color-success)]",
        error: "border-[var(--noor-color-danger)] text-[var(--noor-color-danger)]",
        info: "border-[var(--noor-color-info)] text-[var(--noor-color-info)]",
        warning: "border-[var(--noor-color-warning)] text-[var(--noor-color-warning)]",
        white: "border-white",
      },
    },
  };
  