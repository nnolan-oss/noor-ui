import classnames from "classnames";
import React, { useState } from "react";
import { TbSquare, TbSquareCheckFilled } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import findMatch from "../../utils/findMatch";
import { objectsToString } from "../../utils/objectsToString";
import { Loader } from "../loader/Loader";
import { type CheckboxProps } from "./Checkbox.d";

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ size, color, className, loading, label, defaultChecked, onChange, ...rest }, ref) => {
    const { theme } = useTheme();
    const { checkbox } = theme.components as any;
    const { valid, defaultProps, styles } = checkbox;
    const { base, sizes, colors } = styles;

    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const baseClasses = objectsToString(base.initial);
    const sizeBox = (sizes as any)[findMatch(valid.sizes, size, "md")].box;
    const sizeIcon = (sizes as any)[findMatch(valid.sizes, size, "md")].icon;
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
      classnames(colorSet.base, sizeBox)
    );
    const iconClasses = twMerge(classnames(colorSet.icon, sizeIcon));

    return (
      <label className={labelClasses}>
        <span>
          <input
            {...rest}
            ref={ref}
            type="checkbox"
            checked={isChecked}
            onChange={handleChange}
            disabled={rest.disabled ?? loading}
            className={inputClasses}
            hidden
          />
          <span className="pointer-events-none flex items-center justify-center">
            {loading ? (
              <Loader size="sm" />
            ) : isChecked ? (
              (rest as any).checkedIcon ?? <TbSquareCheckFilled className={iconClasses} />
            ) : (
              (rest as any).uncheckedIcon ?? <TbSquare className={iconClasses} />
            )}
          </span>
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);

