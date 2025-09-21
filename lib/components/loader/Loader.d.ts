import { type TLoaderVariant, type TLoaderSize, type TLoaderColors, type TLoaderClassname, type TLoaderText } from "../../types/components/loader";

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: TLoaderVariant;
  size?: TLoaderSize;
  color?: TLoaderColors;
  className?: TLoaderClassname;
  text?: TLoaderText;
}
