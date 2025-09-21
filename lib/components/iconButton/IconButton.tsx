import React from "react";
import { type IconButtonProps } from "./IconButton.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant, size, color, className, icon, loading, ...rest }, ref) => {
    const { theme } = useTheme();
    const { iconButton } = theme.components;
    const { valid, defaultProps, styles } = iconButton;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const iconButtonBase = objectsToString(base.initial);
    const iconButtonVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "primary")
      ],
    );
    const iconButtonSize = objectsToString((sizes as any)[findMatch(valid.sizes, size, "md")]);
    const classes = twMerge(
      classnames(
        iconButtonBase,
        iconButtonSize,
        iconButtonVariant,
        {
          "flex items-center justify-center": loading,
        },
      ),
      className,
    );

    return (
      <button
        {...rest}
        disabled={rest.disabled ?? loading}
        ref={ref}
        className={classes}
        type={rest.type || "button"}
        aria-label={rest["aria-label"] || "Icon button"}
      >
        {loading ? "load" : icon}
      </button>
    );
  },
);

IconButton.displayName = "IconButton";
