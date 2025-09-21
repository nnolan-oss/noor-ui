import {
  type TSwitchOffIcon,
  type TSwitchOnIcon,
  type TSwitchClassname,
  type TSwitchColors,
  type TSwitchSize,
  type TSwitchLoading
} from "../../types/components/switch";

export interface SwitchProps
  extends React.HTMLAttributes<HTMLInputElement> {
  size?: TSwitchSize;
  color?: TSwitchColors;
  className?: TSwitchClassname;
  loading?: TSwitchLoading
}
