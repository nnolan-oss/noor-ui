import React from "react";
import { type GridProps } from "./Grid.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ cols, rows, gap, justify, align, className, children, as = "div", ...rest }, ref) => {
    const { theme } = useTheme();
    const { grid } = theme.components;
    const { valid, defaultProps, styles } = grid;

    cols = cols ?? defaultProps.cols;
    rows = rows ?? defaultProps.rows;
    gap = gap ?? defaultProps.gap;
    justify = justify ?? defaultProps.justify;
    align = align ?? defaultProps.align;
    className = twMerge(defaultProps.className || "", className);

    const gridBase = objectsToString(styles.base.initial);
    const gridCols = objectsToString(
      (styles.cols as any)[findMatch(valid.cols, cols, 12)],
    );
    const gridRows = objectsToString(
      (styles.rows as any)[findMatch(valid.rows, rows, "auto")],
    );
    const gridGap = objectsToString(
      (styles.gaps as any)[findMatch(valid.gaps, gap, "md")],
    );
    const gridJustify = objectsToString(
      (styles.justifies as any)[findMatch(valid.justifies, justify, "start")],
    );
    const gridAlign = objectsToString(
      (styles.aligns as any)[findMatch(valid.aligns, align, "start")],
    );

    const classes = twMerge(
      classnames(
        gridBase,
        gridCols,
        gridRows,
        gridGap,
        gridJustify,
        gridAlign,
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
