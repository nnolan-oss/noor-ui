import { type ReactNode } from "react";

export type TGridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
export type TGridRows = 1 | 2 | 3 | 4 | 5 | 6 | "auto";
export type TGridGap = "none" | "sm" | "md" | "lg" | "xl";
export type TGridJustify = "start" | "end" | "center" | "between" | "around" | "evenly";
export type TGridAlign = "start" | "end" | "center" | "baseline" | "stretch";
export type TGridChildren = ReactNode;
export type TGridClassname = string;
export type TGridAs = "div" | "section" | "article" | "main" | "aside" | "header" | "footer";
