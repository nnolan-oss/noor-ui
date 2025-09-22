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
    const { radio } = theme.components;
    const { valid, defaultProps, styles } = radio;
    const { base, sizes, colors } = styles;

    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const baseClasses = objectsToString(base.initial);
    const colorSet = (colors as any)[findMatch(valid.colors, color, "primary")];
    const sizeIcon = (sizes as any)[findMatch(valid.sizes, size, "md")].icon;

    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
    const isControlled = defaultChecked !== undefined;
    const isChecked = isControlled ? defaultChecked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalChecked(e.target.checked);
      onChange?.(e);
    };

    const labelClasses = twMerge(classnames(objectsToString(base.label), baseClasses), className);
    const inputClasses = twMerge(
      classnames(colorSet.base)
    );
    const iconClasses = twMerge(classnames(colorSet.icon, sizeIcon), (rest as any).iconClasses);

    return (
      <label className={labelClasses}>
        <span>
          <input
            {...rest}
            ref={ref}
            type="radio"
            name={name}
            checked={isChecked}
            onChange={handleChange}
            disabled={rest.disabled ?? loading}
            className={inputClasses}
            hidden
            aria-hidden="true"
          />
          <span className="pointer-events-none flex items-center justify-center">
            {loading ? (
              <Loader size="sm" />
            ) : isChecked ? (
              (() => {
                const custom = (rest as any).checkedIcon;
                if (React.isValidElement(custom)) {
                  const merged = twMerge((custom.props as any)?.className || "", iconClasses);
                  return React.cloneElement(custom as React.ReactElement<any>, { className: merged } as any);
                }
                return custom ?? <CircleDot className={iconClasses} />;
              })()
            ) : (
              (() => {
                const custom = (rest as any).uncheckedIcon;
                if (React.isValidElement(custom)) {
                  const merged = twMerge((custom.props as any)?.className || "", iconClasses);
                  return React.cloneElement(custom as React.ReactElement<any>, { className: merged } as any);
                }
                return custom ?? <Circle className={iconClasses} />;
              })()
            )}
          </span>
        </span>
        {label && <span>{label}</span>}
      </label>
    );
  }
);

