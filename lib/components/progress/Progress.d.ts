import { type ReactNode } from "react";
import { type TProgressVariant, type TProgressSize, type TProgressColors, type TProgressLabel, type TProgressValue, type TProgressBar, type TProgressBarProps, type TProgressClassname } from "../../types/components/progress";

export interface ProgressProps {
  variant?: TProgressVariant;
  color?: TProgressColors;
  size?: TProgressSize;
  label?: TProgressLabel;
  value?: TProgressValue;
  bar?: TProgressBar;
  barProps?: TProgressBarProps;
  className?: TProgressClassname;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}
