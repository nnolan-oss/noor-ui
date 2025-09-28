import { type TAlertVariant, type TAlertColors, type TAlertStartIcon, type TAlertEndIcon, type TAlertChildren, type TAlertClassname } from "../../types/components/alert";

export interface AlertProps {
  variant?: TAlertVariant;
  color?: TAlertColors;
  startIcon?: TAlertStartIcon;
  endIcon?: TAlertEndIcon;
  children?: TAlertChildren;
  className?: TAlertClassname;
}
