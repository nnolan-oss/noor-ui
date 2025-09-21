import { type InputHTMLAttributes } from "react";
import {
  type TInputVariant,
  type TInputSize,
  type TInputColors,
  type TInputFullWidth,
  type TInputDisabled,
  type TInputError,
  type TInputSuccess,
  type TInputLabel,
  type TInputHelperText,
  type TInputErrorText,
  type TInputSuccessText,
  type TInputStartIcon,
  type TInputEndIcon,
  type TInputClassname,
  type TInputType,
} from "../../types/components/input";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  variant?: TInputVariant;
  size?: TInputSize;
  color?: TInputColors;
  fullWidth?: TInputFullWidth;
  disabled?: TInputDisabled;
  error?: TInputError;
  success?: TInputSuccess;
  label?: TInputLabel;
  helperText?: TInputHelperText;
  errorText?: TInputErrorText;
  successText?: TInputSuccessText;
  startIcon?: TInputStartIcon;
  endIcon?: TInputEndIcon;
  className?: TInputClassname;
  type?: TInputType;
}
