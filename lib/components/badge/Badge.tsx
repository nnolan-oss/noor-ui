import React from "react";
import { type BadgeProps } from "./Badge.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant, size, color, className, children, startIcon, endIcon, ...rest }, ref) => {
    const { theme } = useTheme();
    const { badge } = theme.components;
    const { valid, defaultProps, styles } = badge;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const badgeBase = objectsToString(base.initial);
    const badgeVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "primary")
      ],
    );
    const badgeSize = objectsToString((sizes as any)[findMatch(valid.sizes, size, "md")]);
    const classes = twMerge(
      classnames(
        badgeBase,
        badgeSize,
        badgeVariant,
        {
          "flex items-center gap-1": startIcon || endIcon,
          "gap-1.5": size === "lg",
        },
      ),
      className,
    );

    return (
      <span
        {...rest}
        ref={ref}
        className={classes}
      >
        {startIcon}
        {children}
        {endIcon}
      </span>
    );
  },
);

Badge.displayName = "Badge";
