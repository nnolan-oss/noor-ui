import {
  type TCheckboxClassname,
  type TCheckboxColors,
  type TCheckboxSize,
  type TCheckboxLoading,
} from "../../types/components/checkbox";

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  size?: TCheckboxSize;
  color?: TCheckboxColors;
  className?: TCheckboxClassname;
  loading?: TCheckboxLoading;
  label?: React.ReactNode;
  defaultChecked?: boolean;
  checkedIcon?: React.ReactNode;
  uncheckedIcon?: React.ReactNode;
  iconClasses?: string;
}

