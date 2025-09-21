import { type ReactNode } from "react";
import { type TBadgeVariant, type TBadgeSize, type TBadgeColors, type TBadgeClassname, type TBadgeChildren, type TBadgeStartIcon, type TBadgeEndIcon } from "../../types/components/badge";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: TBadgeVariant;
  size?: TBadgeSize;
  color?: TBadgeColors;
  className?: TBadgeClassname;
  children?: TBadgeChildren;
  startIcon?: TBadgeStartIcon;
  endIcon?: TBadgeEndIcon;
}
