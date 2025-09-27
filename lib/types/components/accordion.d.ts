import { type ReactNode } from "react";

export type TAccordionVariant = "default" | "bordered" | "elevated" | "filled";
export type TAccordionSize = "sm" | "md" | "lg";
export type TAccordionColor = "primary" | "secondary" | "success" | "warning" | "error" | "info" | "gray";
export type TAccordionChildren = ReactNode;
export type TAccordionClassname = string;
export type TAccordionMultiple = boolean;
export type TAccordionDefaultOpen = string | string[];
export type TAccordionValue = string | string[];
export type TAccordionOnValueChange = (value: string | string[]) => void;
export type TAccordionDisabled = boolean;
export type TAccordionCollapsible = boolean;
export type TAccordionType = "single" | "multiple";

// AccordionItem types
export type TAccordionItemValue = string;
export type TAccordionItemDisabled = boolean;
export type TAccordionItemClassname = string;

// AccordionTrigger types
export type TAccordionTriggerClassname = string;
export type TAccordionTriggerChildren = ReactNode;

// AccordionContent types
export type TAccordionContentClassname = string;
export type TAccordionContentChildren = ReactNode;
