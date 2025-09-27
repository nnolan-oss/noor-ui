import { type TAccordionColor } from "../../../../types/components/accordion";

export const accordionFilled = {
  primary: {
    backgroundColor: "bg-primary-50",
    borderColor: "border-primary-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  secondary: {
    backgroundColor: "bg-gray-50",
    borderColor: "border-gray-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  success: {
    backgroundColor: "bg-green-50",
    borderColor: "border-green-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  warning: {
    backgroundColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  error: {
    backgroundColor: "bg-red-50",
    borderColor: "border-red-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  info: {
    backgroundColor: "bg-blue-50",
    borderColor: "border-blue-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  gray: {
    backgroundColor: "bg-gray-50",
    borderColor: "border-gray-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
} as const satisfies Record<TAccordionColor, object>;
