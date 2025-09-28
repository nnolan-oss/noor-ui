import React from "react";
import { type AlertProps } from "./Alert.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, color, startIcon, endIcon, className, children, ...rest }, ref) => {
    const { theme } = useTheme();
    const { alert } = theme.components;
    const { valid, defaultProps, styles } = alert;
    const { base, variants } = styles;

    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const alertBase = objectsToString(base.initial);
    const alertVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "primary")
      ],
    );

    const classes = twMerge(
      classnames(
        alertBase,
        alertVariant,
        {
          "flex items-center gap-3": startIcon || endIcon,
        },
      ),
      className,
    );

    return (
      <div
        {...rest}
        ref={ref}
        className={classes}
        role="alert"
      >
        {startIcon && (
          <div className="flex-shrink-0 text-2xl">
            {startIcon}
          </div>
        )}
        <div className="flex-1">
          {children}
        </div>
        {endIcon && (
          <div className="flex-shrink-0 text-2xl">
            {endIcon}
          </div>
        )}
      </div>
    );
  },
);
