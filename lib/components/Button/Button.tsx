import React from "react";
import { type ButtonProps } from "./Button.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, color, children, size, loading, className, ...rest }, ref) => {

    const { theme } = useTheme();

    console.log(theme.button, "theme")

    return <button ref={ref}>{JSON.stringify(theme.button)}</button>;
  }
);
