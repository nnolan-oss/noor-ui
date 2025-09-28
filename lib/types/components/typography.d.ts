import { type ReactNode } from "react";
import { type TColors } from "../generic";

export type TTypographyVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "lead" | "paragraph" | "small";
export type TTypographyColor = TColors;
export type TTypographyChildren = ReactNode;
export type TTypographyClassName = string;
export type TTypographyAs = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";

export interface TypographyProps {
  variant?: TTypographyVariant;
  color?: TTypographyColor;
  children?: TTypographyChildren;
  className?: TTypographyClassName;
  as?: TTypographyAs;
}
