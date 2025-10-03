"use client";
import React from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { objectsToString } from "../../utils/objectsToString";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement> {
  dense?: boolean;
  divided?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ dense, divided, className, children, ...rest }, ref) => {
    const { theme } = useTheme();
    const { list } = theme.components as any;
    const { defaultProps, styles } = list;
    const { base } = styles;

    dense = dense ?? defaultProps.dense;
    divided = divided ?? defaultProps.divided;
    className = twMerge(defaultProps.className || "", className);

    const listBase = objectsToString(base.initial);
    const classes = twMerge(
      classnames(listBase, {
        [objectsToString(base.dense)]: !!dense,
        [objectsToString(base.divided)]: !!divided,
      }),
      className
    );

    return (
      <ul {...rest} ref={ref} className={classes}>
        {children}
      </ul>
    );
  }
);

List.displayName = "List";

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  selected?: boolean;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ selected, disabled, className, children, ...rest }, ref) => {
    const { theme } = useTheme();
    const { list } = theme.components as any;
    const { defaultProps, styles } = list;
    const { item } = styles;

    selected = selected ?? defaultProps.item.selected;
    disabled = disabled ?? defaultProps.item.disabled;
    className = twMerge(defaultProps.item.className || "", className);

    const baseItem = objectsToString(item.base.initial);
    const classes = twMerge(
      classnames(baseItem, {
        [objectsToString(item.base.selected)]: !!selected,
        [objectsToString(item.base.disabled)]: !!disabled,
      }),
      className
    );

    return (
      <li {...rest} ref={ref} className={classes} aria-disabled={disabled}>
        {children}
      </li>
    );
  }
);

ListItem.displayName = "ListItem";

export interface ListItemPrefixProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const ListItemPrefix = React.forwardRef<
  HTMLSpanElement,
  ListItemPrefixProps
>(({ className, children, ...rest }, ref) => {
  const { theme } = useTheme();
  const { list } = theme.components as any;
  const { styles } = list;
  const { item } = styles;

  const classes = twMerge(classnames(objectsToString(item.prefix)), className);

  return (
    <span {...rest} ref={ref} className={classes}>
      {children}
    </span>
  );
});

ListItemPrefix.displayName = "ListItemPrefix";

export interface ListItemSuffixProps
  extends React.HTMLAttributes<HTMLSpanElement> {}

export const ListItemSuffix = React.forwardRef<
  HTMLSpanElement,
  ListItemSuffixProps
>(({ className, children, ...rest }, ref) => {
  const { theme } = useTheme();
  const { list } = theme.components as any;
  const { styles } = list;
  const { item } = styles;

  const classes = twMerge(classnames(objectsToString(item.suffix)), className);

  return (
    <span {...rest} ref={ref} className={classes}>
      {children}
    </span>
  );
});

ListItemSuffix.displayName = "ListItemSuffix";
