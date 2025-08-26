import {type TypographyProps} from "../Typography/Typography.types";
import {tv} from "tailwind-variants";

const typography = tv({
  base: "font-medium rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white dark:bg-pink-500",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "px-3 py-1 text-sm",
      md: "px-3 py-2 text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
})

export const Typography = ({children, ...props}: TypographyProps) => {
  return (
      <div {...props} className={typography()}>{children}</div>
  )
}
