"use client";
import React from "react";
import { type TypographyProps } from "./Typography.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant, color, children, className, as, ...rest }, ref) => {
    const { theme } = useTheme();
    const { typography } = theme.components;
    const { valid, defaultProps, styles } = typography;
    const { base, variants, colors } = styles;

    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    // Determine the HTML element to render
    const getElementType = (): keyof React.JSX.IntrinsicElements => {
      if (as) return as;

      switch (variant) {
        case "h1":
          return "h1";
        case "h2":
          return "h2";
        case "h3":
          return "h3";
        case "h4":
          return "h4";
        case "h5":
          return "h5";
        case "h6":
          return "h6";
        case "lead":
        case "paragraph":
          return "p";
        case "small":
          return "span";
        default:
          return "p";
      }
    };

    const elementType = getElementType();

    // Get base styles
    const typographyBase = objectsToString(base.initial);

    // Get variant styles
    const typographyVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "paragraph")]
    );

    // Get color styles
    const colorKey = findMatch(valid.colors, color, "primary");

    const typographyColor = objectsToString((colors as any).solid[colorKey]);

    const classes = twMerge(
      classnames(typographyBase, typographyVariant, typographyColor),
      className
    );

    const Component = elementType as any;

    return (
      <Component {...rest} ref={ref} className={classes}>
        {children}
      </Component>
    );
  }
);
