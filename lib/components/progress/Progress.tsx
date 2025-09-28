import React from "react";
import { type ProgressProps } from "./Progress.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ 
    variant, 
    size, 
    color, 
    label, 
    value, 
    bar = 0, 
    barProps = {}, 
    className, 
    ...rest 
  }, ref) => {
    const { theme } = useTheme();
    const { progress } = theme.components;
    const { valid, defaultProps, styles } = progress;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    // Get variant-specific styles
    const variantStyles = (variants as any)[findMatch(valid.variants, variant, "filled")](color);
    const sizeStyles = (sizes as any)[findMatch(valid.sizes, size, "md")];

    // Calculate progress percentage (clamp between 0 and 100)
    const progressPercentage = Math.min(Math.max(bar, 0), 100);

    // Build container classes
    const containerBase = objectsToString(base.container);
    const containerVariant = objectsToString(variantStyles.base.container);
    const containerSize = objectsToString({
      height: sizeStyles.height,
    });
    const containerClasses = twMerge(
      classnames(
        containerBase,
        containerVariant,
        containerSize
      ),
      className
    );

    // Build bar classes
    const barBase = objectsToString(base.bar);
    const barVariant = objectsToString(variantStyles.base.bar);
    const barClasses = twMerge(
      classnames(
        barBase,
        barVariant
      )
    );

    // Build label classes
    const labelBase = objectsToString(base.label);
    const labelVariant = objectsToString(variantStyles.base.label);
    const labelSize = objectsToString({
      fontSize: sizeStyles.labelFontSize,
    });
    const labelClasses = twMerge(
      classnames(
        labelBase,
        labelVariant,
        labelSize
      )
    );

    // Build value classes
    const valueBase = objectsToString(base.value);
    const valueVariant = objectsToString(variantStyles.base.value);
    const valueSize = objectsToString({
      fontSize: sizeStyles.valueFontSize,
    });
    const valueClasses = twMerge(
      classnames(
        valueBase,
        valueVariant,
        valueSize
      )
    );

    return (
      <div {...rest} ref={ref} className="w-full">
        {label && (
          <div className={labelClasses}>
            {label}
          </div>
        )}
        <div ref={ref} className={containerClasses}>
          <div
            className={barClasses}
            style={{ width: `${progressPercentage}%` }}
            {...barProps}
          />
        </div>
        {/* {value !== undefined && (
          <div className={valueClasses}>
            {value}%
          </div>
        )} */}
      </div>
    );
  },
);
