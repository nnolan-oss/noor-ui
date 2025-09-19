import {
  TButtonChildren,
  TButtonClassname,
  TButtonColors,
  TButtonFullWidth,
  TButtonLoading,
  TButtonSize,
  TButtonVariant,
  type TButtonEndIcon,
  type TButtonStartIcon,
} from "../../types/components/button";

export interface ButtonProps extends React.ComponentProps<"button"> {
  variant?: TButtonVariant;
  size?: TButtonSize;
  color?: TButtonColors;
  fullWidth?: TButtonFullWidth;
  className?: TButtonClassname;
  children: TButtonChildren;
  loading?: TButtonLoading;
  startIcon?: TButtonStartIcon;
  endIcon?: TButtonEndIcon
}
