import React from "react";
import { type ButtonProps } from "./Button.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, color, fullWidth, className, children, loading, startIcon, endIcon, ...rest }, ref) => {
    // 1. init
    const { theme } = useTheme();
    const { button } = theme;
    const { valid, defaultProps, styles } = button;
    const { base, variants, sizes } = styles;

    // 2. set default props
    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    className = twMerge(defaultProps.className || "", className);


    // 4. set styles
    const buttonBase = objectsToString(base.initial);
    const buttonVariant = objectsToString(
      variants[findMatch(valid.variants, variant, "filled")][
      findMatch(valid.colors, color, "gray")
      ],
    );
    const buttonSize = objectsToString(sizes[findMatch(valid.sizes, size, "md")]);
    const classes = twMerge(
      classnames(
        buttonBase,
        buttonSize,
        buttonVariant,
        {
          [objectsToString(base.fullWidth)]: fullWidth,
        },
        {
          "flex items-center gap-2": loading,
          "gap-3": size === "lg",
        },
      ),
      className,
    );

    // 5. return
    return (
      <button
        {...rest}
        disabled={rest.disabled ?? loading}
        ref={ref}
        className={classes}
        type={rest.type || "button"}
      >
        {loading && "load"}
        {startIcon}
        {children}
        {endIcon}
      </button>
    );
  },
);