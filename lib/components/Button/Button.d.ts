import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "neutral";
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "outline" | "ghost" | "solid" | "link";
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
