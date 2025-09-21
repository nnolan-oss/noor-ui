import { type ReactNode } from "react";
import { type TIconButtonVariant, type TIconButtonSize, type TIconButtonColors, type TIconButtonClassname, type TIconButtonIcon, type TIconButtonLoading } from "../../types/components/iconButton";

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TIconButtonVariant;
  size?: TIconButtonSize;
  color?: TIconButtonColors;
  className?: TIconButtonClassname;
  icon?: TIconButtonIcon;
  loading?: TIconButtonLoading;
}
