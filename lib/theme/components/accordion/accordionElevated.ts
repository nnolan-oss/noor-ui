import { type TAccordionColor } from "../../../../types/components/accordion";

export const accordionElevated = {
  primary: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-lg",
  },
  secondary: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-lg",
  },
  success: {
    backgroundColor: "bg-white",
    borderColor: "border-green-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-lg",
  },
  warning: {
    backgroundColor: "bg-white",
    borderColor: "border-yellow-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-lg",
  },
  error: {
    backgroundColor: "bg-white",
    borderColor: "border-red-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-lg",
  },
  info: {
    backgroundColor: "bg-white",
    borderColor: "border-blue-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-lg",
  },
  gray: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-200",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-lg",
  },
} as const satisfies Record<TAccordionColor, object>;
