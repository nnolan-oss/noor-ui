import type { ReactNode, HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "neutral";
  variant?: "outline" | "ghost" | "solid" | "link";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
}
