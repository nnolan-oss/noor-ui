import { type ReactNode } from "react";

export type TFlexboxDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type TFlexboxJustify = "start" | "end" | "center" | "between" | "around" | "evenly";
export type TFlexboxAlign = "start" | "end" | "center" | "baseline" | "stretch";
export type TFlexboxWrap = "nowrap" | "wrap" | "wrap-reverse";
export type TFlexboxGap = "none" | "sm" | "md" | "lg" | "xl";
export type TFlexboxChildren = ReactNode;
export type TFlexboxClassname = string;
export type TFlexboxAs = "div" | "section" | "article" | "main" | "aside" | "header" | "footer" | "nav";
