import type {HTMLProps, ReactNode} from "react";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({children}: ButtonProps) => {
  return (
      <button className={"bg-blue-500 px-2 rounded text-white"}>{children}</button>
  )
}
