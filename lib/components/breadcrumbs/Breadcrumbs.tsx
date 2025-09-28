import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { objectsToString } from "../../utils/objectsToString";
import { type BreadcrumbsProps } from "./Breadcrumbs.d";

export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ separator = "/", fullWidth = false, className, children, ...rest }, ref) => {
    const { theme } = useTheme();
    const { breadcrumbs } = theme.components;
    const {defaultProps, styles } = breadcrumbs;
    const { base } = styles;

    className = twMerge(defaultProps.className || "", className);

    const breadcrumbsBase = objectsToString(base.initial);
    const classes = twMerge(
      classnames(
        breadcrumbsBase,
        {
          [objectsToString(base.fullWidth)]: fullWidth,
        }
      ),
      className,
    );

    // Convert children to array and add separators
    const childrenArray = React.Children.toArray(children);
    const itemsWithSeparators: React.ReactNode[] = [];

    childrenArray.forEach((child, index) => {
      itemsWithSeparators.push(child);
      if (index < childrenArray.length - 1) {
        itemsWithSeparators.push(
          <span key={`separator-${index}`} className="mx-2 text-gray-500">
            {separator}
          </span>
        );
      }
    });

    return (
      <nav
        {...rest}
        ref={ref}
        className={classes}
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center">
          {itemsWithSeparators}
        </ol>
      </nav>
    );
  },
);
