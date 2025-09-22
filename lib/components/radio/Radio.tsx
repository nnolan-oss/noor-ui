import React, { useState } from "react";
import { type RadioProps } from "./Radio.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";
import { Loader } from "../loader/Loader";
import { CircleDot, Circle } from "lucide-react";

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ size, color, className, loading, label, defaultChecked, onChange, name, ...rest }, ref) => {
    const { theme } = useTheme();
    const { radio } = theme.components as any;
    const { valid, defaultProps, styles } = radio;
    const { base, sizes, colors } = styles;

    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const baseClasses = objectsToString(base.initial);
    const inputBase = objectsToString(base.input.base);
    const inputFocus = objectsToString(base.input.focus);
    const sizeOuter = (sizes as any)[findMatch(valid.sizes, size, "md")].outer;
    const sizeDot = (sizes as any)[findMatch(valid.sizes, size, "md")].dot;
    const colorSet = (colors as any)[findMatch(valid.colors, color, "primary")];

    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
    const isControlled = defaultChecked !== undefined;
    const isChecked = isControlled ? defaultChecked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked);
      onChange?.(e);
    };

    const labelClasses = twMerge(classnames(objectsToString(base.label), baseClasses), className);
    const inputClasses = twMerge(
      classnames(inputBase, inputFocus, colorSet.base, sizeOuter)
    );
    const dotClasses = twMerge(classnames("rounded-full", colorSet.dot, sizeDot));

    return (
      <label className={labelClasses}>
        <span className="relative inline-flex items-center">
          <input
            {...rest}
            ref={ref}
            type="radio"
            name={name}
            checked={isChecked}
            onChange={handleChange}
            disabled={rest.disabled ?? loading}
            className={inputClasses}
          />
          <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {loading ? (
              <Loader size="sm" />
            ) : isChecked ? (
              (rest as any).checkedIcon ?? <CircleDot className={twMerge(dotClasses, "opacity-100")} />
            ) : (
              (rest as any).uncheckedIcon ?? <Circle className={twMerge(dotClasses, "opacity-100")} />
            )}
          </span>
        </span>
        {label && <span className="ml-2">{label}</span>}
      </label>
    );
  }
);

