import React, { useState } from "react";
import { type CheckboxProps } from "./Checkbox.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";
import { Loader } from "../loader/Loader";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size, color, className, loading, label, defaultChecked, onChange, ...rest }, ref) => {
    const { theme } = useTheme();
    const { checkbox } = theme.components as any;
    const { valid, defaultProps, styles } = checkbox;
    const { base, sizes, variants } = styles;

    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const baseClasses = objectsToString(base.initial);
    const inputBase = objectsToString(base.input.base);
    const inputFocus = objectsToString(base.input.focus);
    const sizeBox = (sizes as any)[findMatch(valid.sizes, size, "md")].box;
    const sizeIcon = (sizes as any)[findMatch(valid.sizes, size, "md")].icon;
    const variant = (variants as any)[findMatch(valid.variants, "filled", "filled")][
      findMatch(valid.colors, color, "primary")
    ];

    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
    const isControlled = defaultChecked !== undefined;
    const isChecked = isControlled ? defaultChecked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked);
      onChange?.(e);
    };

    const labelClasses = twMerge(classnames(objectsToString(base.label)), className);
    const inputClasses = twMerge(
      classnames(inputBase, inputFocus, variant.base, sizeBox)
    );
    const iconClasses = twMerge(classnames(variant.icon, sizeIcon));

    return (
      <label className={labelClasses}>
        <span className="relative inline-flex items-center">
          <input
            {...rest}
            ref={ref}
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            disabled={rest.disabled ?? loading}
            className={inputClasses}
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {loading ? (
              <Loader size="sm" />
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={twMerge(iconClasses, isChecked ? "opacity-100" : "opacity-0")}
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3a1 1 0 111.414-1.414l2.293 2.293 6.543-6.543a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </span>
        </span>
        {label && <span className="ml-2">{label}</span>}
      </label>
    );
  }
);

