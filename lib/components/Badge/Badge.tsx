import { tv } from "tailwind-variants";
import { type BadgeProps } from "./Badge.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { cloneElement, isValidElement } from "react";

const badge = tv({
  base: "inline-flex items-center gap-1 rounded-lg font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed h-5 px-2 text-xs",
  variants: {
    variant: {
      solid: "",
      outline: "border-1 !bg-transparent",
      ghost: "bg-transparent",
      link: "!bg-transparent hover:underline underline-offset-2 px-0",
    },
    color: {
      primary:
        "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
      secondary:
        "bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-400 dark:hover:bg-purple-500",
      success:
        "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600",
      danger:
        "bg-red-600 text-white hover:bg-red-700 dark:bg-red-500 dark:hover:bg-red-600",
      warning:
        "bg-yellow-500 text-black hover:bg-yellow-600 dark:bg-yellow-400 dark:hover:bg-yellow-500",
      neutral:
        "bg-gray-200 text-gray-900 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
    },
  },
  compoundVariants: [
    {
      variant: "outline",
      color: "primary",
      class:
        "border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950",
    },
    {
      variant: "outline",
      color: "secondary",
      class:
        "border-purple-500 text-purple-500 hover:bg-purple-50 dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-950",
    },
    {
      variant: "outline",
      color: "neutral",
      class:
        "border-gray-400 text-gray-700 hover:bg-gray-50 dark:border-gray-500 dark:text-gray-300 dark:hover:bg-gray-800",
    },
    {
      variant: "outline",
      color: "danger",
      class:
        "border-red-400 text-red-700 hover:bg-red-50 dark:border-red-500 dark:text-red-300 dark:hover:bg-red-800",
    },
    {
      variant: "outline",
      color: "success",
      class:
        "border-green-500 text-green-600 hover:bg-green-50 dark:border-green-500 dark:text-green-300 dark:hover:bg-green-800",
    },
    {
      variant: "outline",
      color: "warning",
      class:
        "border-yellow-500 text-yellow-600 hover:bg-yellow-50 dark:border-yellow-500 dark:text-yellow-300 dark:hover:bg-yellow-800",
    },
    {
      variant: "ghost",
      color: "primary",
      class:
        "text-blue-600 !bg-blue-50 hover:!bg-blue-100 dark:text-blue-400 dark:hover:bg-blue-950",
    },
    {
      variant: "ghost",
      color: "secondary",
      class:
        "text-purple-600 !bg-purple-50 hover:!bg-purple-100 dark:text-purple-400 dark:hover:bg-purple-950",
    },
    {
      variant: "ghost",
      color: "success",
      class:
        "text-green-600 !bg-green-50 hover:!bg-green-100 dark:text-green-400 dark:hover:bg-green-950",
    },
    {
      variant: "ghost",
      color: "danger",
      class:
        "text-red-600 !bg-red-50 hover:!bg-red-100 dark:text-red-400 dark:hover:bg-red-950",
    },
    {
      variant: "ghost",
      color: "warning",
      class:
        "text-yellow-600 !bg-yellow-50 hover:!bg-yellow-100 dark:text-yellow-400 dark:hover:bg-yellow-950",
    },
    {
      variant: "ghost",
      color: "neutral",
      class:
        "text-gray-600 !bg-gray-50 hover:!bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-950",
    },
    {
      variant: "link",
      color: "primary",
      class: "text-blue-500 hover:underline dark:text-blue-400",
    },
    {
      variant: "link",
      color: "secondary",
      class: "text-purple-500 hover:underline dark:text-purple-400",
    },
    {
      variant: "link",
      color: "success",
      class: "text-green-600 hover:underline dark:text-green-400",
    },
    {
      variant: "link",
      color: "danger",
      class: "text-red-600 hover:underline dark:text-red-400",
    },
    {
      variant: "link",
      color: "warning",
      class: "text-yellow-600 hover:underline dark:text-yellow-400",
    },
    {
      variant: "link",
      color: "neutral",
      class: "text-gray-600 hover:underline dark:text-gray-400",
    },
  ],
  defaultVariants: {
    variant: "solid",
    color: "primary",
  },
});

export const Badge = ({
  children,
  className,
  color,
  variant,
  icon,
  iconPosition = "left",
  ...props
}: BadgeProps) => {
  const { theme } = useTheme();
  const badgeConfig = theme?.components?.Badge;

  const normalizedIcon = isValidElement(icon)
    ? cloneElement(icon, { size: 12, className: "shrink-0" })
    : null;

  return (
    <span
      className={badge({
        color,
        variant,
        class: [badgeConfig?.defaultProps?.className, className]
          .filter(Boolean)
          .join(" "),
      })}
      {...props}
    >
      {icon && iconPosition === "left" && <span>{normalizedIcon}</span>}
      {children}
      {icon && iconPosition === "right" && <span>{normalizedIcon}</span>}
    </span>
  );
};
