import {
  type TTypographyClassName,
  type TTypographyColor,
  type TTypographyVariant,
} from "../../../types/components/typography";
import { themeColors, type TColors } from "../../../types/generic";
import { typographySolid } from "./typographySolid";

export interface ITypographyStyleTypes {
  defaultProps: {
    variant: TTypographyVariant;
    color?: TTypographyColor;
    className: TTypographyClassName;
  };
  valid: {
    variants: string[];
    colors: (TColors | "gradient")[];
  };
  styles: {
    base: {
      initial: object;
    };
    variants: {
      h1: object;
      h2: object;
      h3: object;
      h4: object;
      h5: object;
      h6: object;
      lead: object;
      paragraph: object;
      small: object;
    };
    colors: {
      solid: typeof typographySolid;
    };
  };
}

export const typography: ITypographyStyleTypes = {
  defaultProps: {
    variant: "paragraph",
    color: "white",
    className: "",
  },
  valid: {
    variants: [
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "lead",
      "paragraph",
      "small",
    ],
    colors: [...themeColors],
  },
  styles: {
    base: {
      initial: {
        fontFamily: "font-sans",
        fontWeight: "font-normal",
        lineHeight: "leading-normal",
        textDecoration: "no-underline",
        textTransform: "normal-case",
      },
    },
    variants: {
      h1: {
        fontSize: "text-4xl",
        fontWeight: "font-bold",
        lineHeight: "leading-tight",
        letterSpacing: "tracking-tight",
      },
      h2: {
        fontSize: "text-3xl",
        fontWeight: "font-bold",
        lineHeight: "leading-tight",
        letterSpacing: "tracking-tight",
      },
      h3: {
        fontSize: "text-2xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
        letterSpacing: "tracking-tight",
      },
      h4: {
        fontSize: "text-xl",
        fontWeight: "font-semibold",
        lineHeight: "leading-snug",
        letterSpacing: "tracking-normal",
      },
      h5: {
        fontSize: "text-lg",
        fontWeight: "font-medium",
        lineHeight: "leading-snug",
        letterSpacing: "tracking-normal",
      },
      h6: {
        fontSize: "text-base",
        fontWeight: "font-medium",
        lineHeight: "leading-normal",
        letterSpacing: "tracking-normal",
      },
      lead: {
        fontSize: "text-xl",
        fontWeight: "font-normal",
        lineHeight: "leading-relaxed",
        letterSpacing: "tracking-normal",
      },
      paragraph: {
        fontSize: "text-base",
        fontWeight: "font-normal",
        lineHeight: "leading-relaxed",
        letterSpacing: "tracking-normal",
      },
      small: {
        fontSize: "text-sm",
        fontWeight: "font-normal",
        lineHeight: "leading-normal",
        letterSpacing: "tracking-normal",
      },
    },
    colors: {
      solid: typographySolid,
    },
  },
};
