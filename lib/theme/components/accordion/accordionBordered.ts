import { type TAccordionColor } from "../../../../types/components/accordion";

export const accordionBordered = {
  primary: {
    backgroundColor: "bg-white",
    borderColor: "border-primary-300",
    borderWidth: "border-2",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  secondary: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-300",
    borderWidth: "border-2",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  success: {
    backgroundColor: "bg-white",
    borderColor: "border-green-300",
    borderWidth: "border-2",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  warning: {
    backgroundColor: "bg-white",
    borderColor: "border-yellow-300",
    borderWidth: "border-2",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  error: {
    backgroundColor: "bg-white",
    borderColor: "border-red-300",
    borderWidth: "border-2",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  info: {
    backgroundColor: "bg-white",
    borderColor: "border-blue-300",
    borderWidth: "border-2",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
  gray: {
    backgroundColor: "bg-white",
    borderColor: "border-gray-300",
    borderWidth: "border-2",
    borderRadius: "rounded-lg",
    boxShadow: "shadow-sm",
  },
} as const satisfies Record<TAccordionColor, object>;
