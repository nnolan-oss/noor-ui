import React from "react";
import { type FlexboxProps } from "./Flexbox.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Flexbox = React.forwardRef<HTMLDivElement, FlexboxProps>(
  ({ direction, justify, align, wrap, gap, className, children, as = "div", ...rest }, ref) => {
    const { theme } = useTheme();
    const { flexbox } = theme.components;
    const { valid, defaultProps, styles } = flexbox;

    direction = direction ?? defaultProps.direction;
    justify = justify ?? defaultProps.justify;
    align = align ?? defaultProps.align;
    wrap = wrap ?? defaultProps.wrap;
    gap = gap ?? defaultProps.gap;
    className = twMerge(defaultProps.className || "", className);

    const flexboxBase = objectsToString(styles.base.initial);
    const flexboxDirection = objectsToString(
      (styles.directions as any)[findMatch(valid.directions, direction, "row")],
    );
    const flexboxJustify = objectsToString(
      (styles.justifies as any)[findMatch(valid.justifies, justify, "start")],
    );
    const flexboxAlign = objectsToString(
      (styles.aligns as any)[findMatch(valid.aligns, align, "start")],
    );
    const flexboxWrap = objectsToString(
      (styles.wraps as any)[findMatch(valid.wraps, wrap, "nowrap")],
    );
    const flexboxGap = objectsToString(
      (styles.gaps as any)[findMatch(valid.gaps, gap, "md")],
    );

    const classes = twMerge(
      classnames(
        flexboxBase,
        flexboxDirection,
        flexboxJustify,
        flexboxAlign,
        flexboxWrap,
        flexboxGap,
      ),
      className,
    );

    const Component = as as React.ElementType;

    return (
      <Component
        {...rest}
        ref={ref}
        className={classes}
      >
        {children}
      </Component>
    );
  },
);
