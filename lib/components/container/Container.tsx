import React from "react";
import { type ContainerProps } from "./Container.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ variant, size, padding, margin, className, children, as = "div", ...rest }, ref) => {
    const { theme } = useTheme();
    const { container } = theme.components;
    const { valid, defaultProps, styles } = container;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    padding = padding ?? defaultProps.padding;
    margin = margin ?? defaultProps.margin;
    className = twMerge(defaultProps.className || "", className);

    const containerBase = objectsToString(styles.base.initial);
    const containerVariant = objectsToString(
      (styles.variants as any)[findMatch(valid.variants, variant, "default")].base,
    );
    const containerSize = objectsToString(
      (styles.variants as any)[findMatch(valid.variants, variant, "default")].sizes[
        findMatch(valid.sizes, size, "lg")
      ],
    );
    const containerPadding = objectsToString(
      (styles.paddings as any)[findMatch(valid.paddings, padding, "md")],
    );
    const containerMargin = objectsToString(
      (styles.margins as any)[findMatch(valid.margins, margin, "none")],
    );

    const classes = twMerge(
      classnames(
        containerBase,
        containerVariant,
        containerSize,
        containerPadding,
        containerMargin,
      ),
      className,
    );

    const Component = as as React.ElementType;

    return (
      <Component
        {...rest}
        ref={ref}
        className={classes}
      >
        {children}
      </Component>
    );
  },
);
