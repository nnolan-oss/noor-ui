import {
  TContainerChildren,
  TContainerClassname,
  TContainerVariant,
  TContainerSize,
  TContainerPadding,
  TContainerMargin,
  TContainerAs,
} from "../../types/components/container";

export interface ContainerProps extends React.ComponentProps<"div"> {
  variant?: TContainerVariant;
  size?: TContainerSize;
  padding?: TContainerPadding;
  margin?: TContainerMargin;
  className?: TContainerClassname;
  children: TContainerChildren;
  as?: TContainerAs;
}
