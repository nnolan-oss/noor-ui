import { type ReactNode } from "react";

export type TGridCols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto";
export type TGridRows = 1 | 2 | 3 | 4 | 5 | 6 | "auto";
export type TGridGap = "none" | "sm" | "md" | "lg" | "xl";
export type TGridJustify = "start" | "end" | "center" | "between" | "around" | "evenly";
export type TGridAlign = "start" | "end" | "center" | "baseline" | "stretch";
export type TGridChildren = ReactNode;
export type TGridClassname = string;
export type TGridAs = "div" | "section" | "article" | "main" | "aside" | "header" | "footer";

// grid item
export type TGridItemColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto" | "full";
export type TGridItemRowSpan = 1 | 2 | 3 | 4 | 5 | 6 | "auto" | "full";
export type TGridItemColStart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "auto";
export type TGridItemRowStart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
export type TGridItemJustify = "start" | "end" | "center" | "stretch";
export type TGridItemAlign = "start" | "end" | "center" | "stretch";
export type TGridItemChildren = ReactNode;
export type TGridItemClassname = string;
export type TGridItemAs = "div" | "section" | "article" | "main" | "aside" | "header" | "footer";
