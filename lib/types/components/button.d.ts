import { type ReactNode } from "react";
import { type TColors } from "../generic";

export type TButtonVariant = "filled" | "outlined" | "text" | "gradient";
export type TButtonSize = "sm" | "md" | "lg";
export type TButtonColors = TColors;
export type TButtonFullWidth = boolean;
export type TButtonLoading = boolean;
export type TButtonChildren = ReactNode;
export type TButtonStartIcon = ReactNode;
export type TButtonEndIcon = ReactNode;
export type TButtonClassname = string;
