import React from "react";
import { type GridItemProps } from "./GridItem.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const GridItem = React.forwardRef<HTMLDivElement, GridItemProps>(
  ({ colSpan, rowSpan, colStart, rowStart, justify, align, className, children, as = "div", ...rest }, ref) => {
    const { theme } = useTheme();
    const { gridItem } = theme.components;
    const { valid, defaultProps, styles } = gridItem;

    colSpan = colSpan ?? defaultProps.colSpan;
    rowSpan = rowSpan ?? defaultProps.rowSpan;
    colStart = colStart ?? defaultProps.colStart;
    rowStart = rowStart ?? defaultProps.rowStart;
    justify = justify ?? defaultProps.justify;
    align = align ?? defaultProps.align;
    className = twMerge(defaultProps.className || "", className);

    const gridItemBase = objectsToString(styles.base.initial);
    const gridItemColSpan = objectsToString(
      (styles.colSpans as any)[findMatch(valid.colSpans, colSpan, "auto")],
    );
    const gridItemRowSpan = objectsToString(
      (styles.rowSpans as any)[findMatch(valid.rowSpans, rowSpan, "auto")],
    );
    const gridItemColStart = objectsToString(
      (styles.colStarts as any)[findMatch(valid.colStarts, colStart, "auto")],
    );
    const gridItemRowStart = objectsToString(
      (styles.rowStarts as any)[findMatch(valid.rowStarts, rowStart, "auto")],
    );
    const gridItemJustify = objectsToString(
      (styles.justifies as any)[findMatch(valid.justifies, justify, "stretch")],
    );
    const gridItemAlign = objectsToString(
      (styles.aligns as any)[findMatch(valid.aligns, align, "stretch")],
    );

    const classes = twMerge(
      classnames(
        gridItemBase,
        gridItemColSpan,
        gridItemRowSpan,
        gridItemColStart,
        gridItemRowStart,
        gridItemJustify,
        gridItemAlign,
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
