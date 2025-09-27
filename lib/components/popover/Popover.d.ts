import { type ReactNode, type HTMLAttributes, type ButtonHTMLAttributes } from "react";
import {
  type TPopoverVariant,
  type TPopoverSize,
  type TPopoverColor,
  type TPopoverChildren,
  type TPopoverClassname,
  type TPopoverOpen,
  type TPopoverOnOpenChange,
  type TPopoverTrigger,
  type TPopoverPlacement,
  type TPopoverOffset,
  type TPopoverArrow,
  type TPopoverCloseOnEscape,
  type TPopoverCloseOnOutsideClick,
  type TPopoverPortal,
  type TPopoverDisabled,
  type TPopoverTriggerChildren,
  type TPopoverTriggerClassname,
  type TPopoverTriggerAsChild,
  type TPopoverContentChildren,
  type TPopoverContentClassname,
  type TPopoverContentSide,
  type TPopoverContentAlign,
  type TPopoverContentSideOffset,
  type TPopoverContentAlignOffset,
  type TPopoverContentCollisionPadding,
  type TPopoverContentArrowPadding,
  type TPopoverContentSticky,
  type TPopoverContentHideWhenDetached,
} from "../../types/components/popover";

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TPopoverVariant;
  size?: TPopoverSize;
  color?: TPopoverColor;
  children?: TPopoverChildren;
  className?: TPopoverClassname;
  open?: TPopoverOpen;
  defaultOpen?: TPopoverOpen;
  onOpenChange?: TPopoverOnOpenChange;
  trigger?: TPopoverTrigger;
  placement?: TPopoverPlacement;
  offset?: TPopoverOffset;
  arrow?: TPopoverArrow;
  closeOnEscape?: TPopoverCloseOnEscape;
  closeOnOutsideClick?: TPopoverCloseOnOutsideClick;
  portal?: TPopoverPortal;
  disabled?: TPopoverDisabled;
}

export interface PopoverTriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: TPopoverTriggerChildren;
  className?: TPopoverTriggerClassname;
  asChild?: TPopoverTriggerAsChild;
}

export interface PopoverContentProps extends HTMLAttributes<HTMLDivElement> {
  children?: TPopoverContentChildren;
  className?: TPopoverContentClassname;
  side?: TPopoverContentSide;
  align?: TPopoverContentAlign;
  sideOffset?: TPopoverContentSideOffset;
  alignOffset?: TPopoverContentAlignOffset;
  collisionPadding?: TPopoverContentCollisionPadding;
  arrowPadding?: TPopoverContentArrowPadding;
  sticky?: TPopoverContentSticky;
  hideWhenDetached?: TPopoverContentHideWhenDetached;
}
