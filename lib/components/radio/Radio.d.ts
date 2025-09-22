import {
  type TRadioClassname,
  type TRadioColors,
  type TRadioSize,
  type TRadioLoading,
} from "../../types/components/radio";

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: TRadioSize;
  color?: TRadioColors;
  className?: TRadioClassname;
  loading?: TRadioLoading;
  label?: React.ReactNode;
  defaultChecked?: boolean;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  iconClasses?: string;
}

