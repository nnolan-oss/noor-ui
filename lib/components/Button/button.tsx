import {useTheme} from "../../core/noorThemeProvider/NoorThemeProvider";
import type {ButtonProps} from "./button.types";


export const Button = ({children}: ButtonProps) => {
  const {theme} = useTheme();
  const buttonConfig = theme?.components?.Button

  return (
      <button className={`${buttonConfig?.defaultProps?.className} text-white px-2`}>{children}</button>
  )
}
