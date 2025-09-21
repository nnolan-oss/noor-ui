import React from "react";
import { type InputProps } from "./Input.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    variant, 
    size, 
    color, 
    fullWidth, 
    disabled, 
    error, 
    success, 
    label, 
    helperText, 
    errorText, 
    successText, 
    startIcon, 
    endIcon, 
    className, 
    type = "text",
    ...rest 
  }, ref) => {
    const { theme } = useTheme();
    const { input } = theme.components;
    const { valid, defaultProps, styles } = input;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    fullWidth = fullWidth ?? defaultProps.fullWidth;
    disabled = disabled ?? defaultProps.disabled;
    error = error ?? defaultProps.error;
    success = success ?? defaultProps.success;
    className = twMerge(defaultProps.className || "", className);

    const inputBase = objectsToString(base.initial);
    const inputVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "outlined")][
        findMatch(valid.colors, color, "gray")
      ],
    );
    const inputSize = objectsToString((sizes as any)[findMatch(valid.sizes, size, "md")]);
    
    const inputClasses = twMerge(
      classnames(
        inputBase,
        inputSize,
        inputVariant,
        {
          [objectsToString(base.fullWidth)]: fullWidth,
          [objectsToString(base.disabled)]: disabled,
          [objectsToString(base.error)]: error,
          [objectsToString(base.success)]: success,
        },
        {
          "pl-10": startIcon,
          "pr-10": endIcon,
        },
        "focus:outline-none focus:ring-2 focus:ring-offset-0"
      ),
      className,
    );

    const containerClasses = twMerge(
      "relative",
      {
        "w-full": fullWidth,
      }
    );

    const labelClasses = twMerge(
      "block text-sm font-medium mb-2",
      {
        "text-gray-700": !error && !success,
        "text-red-600": error,
        "text-green-600": success,
      }
    );

    const helperTextClasses = twMerge(
      "text-xs mt-1",
      {
        "text-gray-500": !error && !success,
        "text-red-600": error,
        "text-green-600": success,
      }
    );

    const getHelperText = () => {
      if (error && errorText) return errorText;
      if (success && successText) return successText;
      return helperText;
    };

    return (
      <div className={containerClasses}>
        {label && (
          <label className={labelClasses}>
            {label}
          </label>
        )}
        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <div className={`${error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-500'}`}>
                {startIcon}
              </div>
            </div>
          )}
          <input
            {...rest}
            ref={ref}
            type={type}
            disabled={disabled}
            className={inputClasses}
          />
          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <div className={`${error ? 'text-red-500' : success ? 'text-green-500' : 'text-gray-500'}`}>
                {endIcon}
              </div>
            </div>
          )}
        </div>
        {getHelperText() && (
          <p className={helperTextClasses}>
            {getHelperText()}
          </p>
        )}
      </div>
    );
  },
);
