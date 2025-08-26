import { tv } from "tailwind-variants";
import {type ButtonProps} from "./Button.types";
import {useTheme} from "../../core/noorThemeProvider/NoorThemeProvider";

const button = tv({
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
          className={button({
            color,
            size,
            class: [buttonConfig?.defaultProps?.className, className], // 👈 merged by tailwind-merge
          })}
          {...props}
      >
        {children}
      </button>
  );
};
