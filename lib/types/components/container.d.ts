import { type ReactNode } from "react";

export type TContainerVariant = "default" | "fluid" | "bordered" | "elevated";
export type TContainerSize = "sm" | "md" | "lg" | "xl" | "2xl";
export type TContainerPadding = "none" | "sm" | "md" | "lg" | "xl";
export type TContainerMargin = "none" | "sm" | "md" | "lg" | "xl";
export type TContainerChildren = ReactNode;
export type TContainerClassname = string;
export type TContainerAs = "div" | "section" | "article" | "main" | "aside" | "header" | "footer";
