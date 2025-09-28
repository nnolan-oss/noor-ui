import { type TAvatarVariant, type TAvatarSize, type TAvatarColors, type TAvatarBordered, type TAvatarBorderColor, type TAvatarClassname } from "../../types/components/avatar";

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: TAvatarVariant;
  size?: TAvatarSize;
  color?: TAvatarColors;
  bordered?: TAvatarBordered;
  borderColor?: TAvatarBorderColor;
  className?: TAvatarClassname;
  src?: string;
  alt?: string;
  children?: React.ReactNode;
}
