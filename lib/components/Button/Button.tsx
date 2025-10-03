"use client";
import React, { cloneElement, isValidElement } from "react";
import { type ButtonProps } from "./Button.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";
import { Loader } from "../loader/Loader";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant,
      size,
      color,
      fullWidth,
      className,
      children,
      loading,
      startIcon,
      endIcon,
      ...rest
    },
    ref
  ) => {
    const { theme } = useTheme();
    const { button } = theme.components;
    const { valid, defaultProps, styles } = button;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    className = twMerge(defaultProps.className || "", className);

    const buttonBase = objectsToString(base.initial);
    const buttonVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "gray")
      ]
    );
    const buttonSize = objectsToString(
      (sizes as any)[findMatch(valid.sizes, size, "md")]
    );
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
          "flex justify-between items-center px-3 gap-2":
            startIcon || endIcon || loading,
        }
      ),
      className
    );

    const iconSize =
      size === "lg" ? "w-6 h-6" : size === "sm" ? "w-4 h-4" : "w-5 h-5";

    return (
      <button
        {...rest}
        disabled={rest.disabled ?? loading}
        ref={ref}
        className={classes}
        type={rest.type || "button"}
      >
        {loading && (
          <Loader
            size={size === "sm" ? "sm" : size === "lg" ? "md" : "sm"}
            color={variant === "filled" ? "white" : color}
          />
        )}
        {isValidElement(startIcon)
          ? cloneElement(
              startIcon as React.ReactElement<{
                className?: string;
              }>,
              {
                className: iconSize,
              }
            )
          : startIcon}
        {children}
        {isValidElement(endIcon)
          ? cloneElement(
              endIcon as React.ReactElement<{
                className?: string;
              }>,
              {
                className: iconSize,
              }
            )
          : endIcon}
      </button>
    );
  }
);
