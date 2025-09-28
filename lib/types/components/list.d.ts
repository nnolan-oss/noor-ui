import { type ReactNode, type HTMLAttributes, type LiHTMLAttributes } from "react";

export type TListDense = boolean;
export type TListDivided = boolean;
export type TListChildren = ReactNode;
export type TListClassname = string;

export interface ListComponentProps extends HTMLAttributes<HTMLUListElement> {
  dense?: TListDense;
  divided?: TListDivided;
  children?: TListChildren;
  className?: TListClassname;
}

export interface ListItemComponentProps extends LiHTMLAttributes<HTMLLIElement> {
  selected?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  className?: string;
}


