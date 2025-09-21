import React, { useState } from "react";
import { type SwitchProps } from "./switch.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";
import { Loader } from "../loader/Loader";

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ size, color, className, loading, onChange, defaultChecked, ...rest }, ref) => {
    const { theme } = useTheme();
    const { switchTheme } = theme.components;
    const { valid, defaultProps, styles } = switchTheme;
    const { base, sizes, variants } = styles;

    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const switchBase = objectsToString(base.initial);
    const switchSize = (sizes as any)[findMatch(valid.sizes, size, "md")];
    const switchVariant =
      (variants as any)[findMatch(valid.variants, "filled", "filled")][
        findMatch(valid.colors, color, "primary")
      ];

    // Internal state (for uncontrolled usage)
    const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);

    const isControlled = defaultChecked !== undefined;
    const isChecked = isControlled ? defaultChecked : internalChecked;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalChecked(e.target.checked);
      }
      if (onChange) {
        onChange(e);
      }
    };

    const classes = twMerge(
      classnames(
        switchBase,
        isChecked ? switchVariant.on : switchVariant.off,
        switchSize.track
      ),
      className
    );

    const thumbClasses = twMerge(
      classnames(
        switchSize.thumb,
        "flex items-center justify-center rounded-full shadow-md transform transition-transform duration-300",
        "bg-white",
        isChecked ? switchSize.thumbChecked : "translate-x-0"
      )
    );

    return (
      <label className={classes}>
        <input
          {...rest}
          ref={ref}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          className="hidden"
        />
        {loading ? <Loader size="sm" /> : <span className={thumbClasses} />}
      </label>
    );
  }
);
