import { type ReactNode } from "react";

export type TGridItemColSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "auto" | "full";
export type TGridItemRowSpan = 1 | 2 | 3 | 4 | 5 | 6 | "auto" | "full";
export type TGridItemColStart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | "auto";
export type TGridItemRowStart = 1 | 2 | 3 | 4 | 5 | 6 | 7 | "auto";
export type TGridItemJustify = "start" | "end" | "center" | "stretch";
export type TGridItemAlign = "start" | "end" | "center" | "stretch";
export type TGridItemChildren = ReactNode;
export type TGridItemClassname = string;
export type TGridItemAs = "div" | "section" | "article" | "main" | "aside" | "header" | "footer";
