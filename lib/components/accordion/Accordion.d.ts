import { type ReactNode } from "react";
import {
  type TAccordionChildren,
  type TAccordionClassname,
  type TAccordionColor,
  type TAccordionCollapsible,
  type TAccordionDefaultOpen,
  type TAccordionMultiple,
  type TAccordionOnValueChange,
  type TAccordionSize,
  type TAccordionType,
  type TAccordionValue,
  type TAccordionVariant,
} from "../../types/components/accordion";

export interface AccordionProps {
  children: TAccordionChildren;
  variant?: TAccordionVariant;
  size?: TAccordionSize;
  color?: TAccordionColor;
  className?: TAccordionClassname;
  type?: TAccordionType;
  value?: TAccordionValue;
  defaultValue?: TAccordionDefaultOpen;
  onValueChange?: TAccordionOnValueChange;
  collapsible?: TAccordionCollapsible;
  multiple?: TAccordionMultiple;
  disabled?: boolean;
}

export interface AccordionItemProps {
  children: TAccordionChildren;
  value: string;
  disabled?: boolean;
  className?: string;
}

export interface AccordionTriggerProps {
  children: TAccordionChildren;
  className?: string;
}

export interface AccordionContentProps {
  children: TAccordionChildren;
  className?: string;
}
