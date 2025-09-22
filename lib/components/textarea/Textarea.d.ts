import { type TextareaHTMLAttributes } from "react";
import {
  type TTextareaVariant,
  type TTextareaSize,
  type TTextareaColors,
  type TTextareaFullWidth,
  type TTextareaDisabled,
  type TTextareaError,
  type TTextareaSuccess,
  type TTextareaLabel,
  type TTextareaHelperText,
  type TTextareaErrorText,
  type TTextareaSuccessText,
  type TTextareaStartIcon,
  type TTextareaEndIcon,
  type TTextareaClassname,
} from "../../types/components/textarea";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  variant?: TTextareaVariant;
  size?: TTextareaSize;
  color?: TTextareaColors;
  fullWidth?: TTextareaFullWidth;
  disabled?: TTextareaDisabled;
  error?: TTextareaError;
  success?: TTextareaSuccess;
  label?: TTextareaLabel;
  helperText?: TTextareaHelperText;
  errorText?: TTextareaErrorText;
  successText?: TTextareaSuccessText;
  startIcon?: TTextareaStartIcon;
  endIcon?: TTextareaEndIcon;
  className?: TTextareaClassname;
  rows?: number;
}


