import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import type { ButtonProps } from "./button.types";
import { tv } from "tailwind-variants";
import clsx from "clsx";

const button = tv({
  base: "font-medium rounded-full active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
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
});

export const Button = ({
                         children,
                         className,
                         color,
                         size,
                         ...props
                       }: ButtonProps) => {
  const { theme } = useTheme();
  const buttonConfig = theme?.components?.Button;

  return (
      <button
          className={clsx(
              buttonConfig?.defaultProps?.className,
              button({ color, size }),
              className
          )}
          {...props}
      >
        {children}
      </button>
  );
};
