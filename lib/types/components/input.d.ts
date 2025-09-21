import { type ReactNode } from "react";
import { type TColors } from "../generic";

export type TInputVariant = "filled" | "outlined";
export type TInputSize = "sm" | "md" | "lg";
export type TInputColors = TColors;
export type TInputFullWidth = boolean;
export type TInputDisabled = boolean;
export type TInputError = boolean;
export type TInputSuccess = boolean;
export type TInputLabel = string;
export type TInputHelperText = string;
export type TInputErrorText = string;
export type TInputSuccessText = string;
export type TInputStartIcon = ReactNode;
export type TInputEndIcon = ReactNode;
export type TInputClassname = string;
export type TInputType = "text" | "email" | "password" | "number" | "tel" | "url" | "search";
