import React from "react";
import { type LoaderProps } from "./Loader.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Loader = React.forwardRef<HTMLDivElement, LoaderProps>(
  ({ variant, size, color, className, text, ...rest }, ref) => {
    const { theme } = useTheme();
    const { loader } = theme.components;
    const { valid, defaultProps, styles } = loader;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const loaderBase = objectsToString(base.initial);
    const loaderVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "spinner")][
        findMatch(valid.colors, color, "primary")
      ],
    );
    const loaderSize = objectsToString((sizes as any)[findMatch(valid.sizes, size, "md")]);
    const classes = twMerge(
      classnames(
        loaderBase,
        loaderSize,
        loaderVariant,
      ),
      className,
    );

    const renderLoader = () => {
      switch (variant) {
        case "spinner":
          return (
            <div className="animate-spin rounded-full border-2 border-current border-t-transparent w-full h-full">
              <span className="sr-only">Loading...</span>
            </div>
          );
        case "dots":
          return (
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></div>
              <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></div>
            </div>
          );
        case "pulse":
          return (
            <div className="w-full h-full bg-current rounded animate-pulse">
              <span className="sr-only">Loading...</span>
            </div>
          );
        case "bars":
          return (
            <div className="flex space-x-1 items-end">
              <div className="w-1 h-3 bg-current rounded animate-pulse" style={{ animationDelay: "0ms" }}></div>
              <div className="w-1 h-4 bg-current rounded animate-pulse" style={{ animationDelay: "150ms" }}></div>
              <div className="w-1 h-3 bg-current rounded animate-pulse" style={{ animationDelay: "300ms" }}></div>
              <div className="w-1 h-2 bg-current rounded animate-pulse" style={{ animationDelay: "450ms" }}></div>
            </div>
          );
        default:
          return null;
      }
    };

    return (
      <div
        {...rest}
        ref={ref}
        className={classes}
        role="status"
        aria-label={text || "Loading"}
      >
        {renderLoader()}
        {text && (
          <span className="ml-2 text-sm font-medium">
            {text}
          </span>
        )}
      </div>
    );
  },
);

Loader.displayName = "Loader";
