import { type TAccordionColor } from "../../../../types/components/accordion";

export const accordionDefault = {
  primary: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-200",
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
    backgroundColor: "bg-white",
    borderColor: "border-green-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  warning: {
    backgroundColor: "bg-white",
    borderColor: "border-yellow-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  error: {
    backgroundColor: "bg-white",
    borderColor: "border-red-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  info: {
    backgroundColor: "bg-white",
    borderColor: "border-blue-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  gray: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
} as const satisfies Record<TAccordionColor, object>;
