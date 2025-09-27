import { type ReactNode } from "react";
import { type TColors } from "../generic";

export type TPopoverVariant = "default" | "bordered" | "elevated" | "filled";
export type TPopoverSize = "sm" | "md" | "lg";
export type TPopoverColor = TColors;
export type TPopoverChildren = ReactNode;
export type TPopoverClassname = string;
export type TPopoverOpen = boolean;
export type TPopoverOnOpenChange = (open: boolean) => void;
export type TPopoverTrigger = "click" | "hover" | "focus" | "manual";
export type TPopoverPlacement = 
  | "top" 
  | "top-start" 
  | "top-end" 
  | "bottom" 
  | "bottom-start" 
  | "bottom-end" 
  | "left" 
  | "left-start" 
  | "left-end" 
  | "right" 
  | "right-start" 
  | "right-end";
export type TPopoverOffset = number;
export type TPopoverArrow = boolean;
export type TPopoverCloseOnEscape = boolean;
export type TPopoverCloseOnOutsideClick = boolean;
export type TPopoverPortal = boolean;
export type TPopoverDisabled = boolean;

// PopoverTrigger types
export type TPopoverTriggerChildren = ReactNode;
export type TPopoverTriggerClassname = string;
export type TPopoverTriggerAsChild = boolean;

// PopoverContent types
export type TPopoverContentChildren = ReactNode;
export type TPopoverContentClassname = string;
export type TPopoverContentSide = "top" | "right" | "bottom" | "left";
export type TPopoverContentAlign = "start" | "center" | "end";
export type TPopoverContentSideOffset = number;
export type TPopoverContentAlignOffset = number;
export type TPopoverContentCollisionPadding = number | { top?: number; right?: number; bottom?: number; left?: number };
export type TPopoverContentArrowPadding = number;
export type TPopoverContentSticky = "partial" | "always";
export type TPopoverContentHideWhenDetached = boolean;
