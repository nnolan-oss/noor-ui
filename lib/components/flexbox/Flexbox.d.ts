import {
  TFlexboxChildren,
  TFlexboxClassname,
  TFlexboxDirection,
  TFlexboxJustify,
  TFlexboxAlign,
  TFlexboxWrap,
  TFlexboxGap,
  TFlexboxAs,
} from "../../types/components/flexbox";

export interface FlexboxProps extends React.ComponentProps<"div"> {
  direction?: TFlexboxDirection;
  justify?: TFlexboxJustify;
  align?: TFlexboxAlign;
  wrap?: TFlexboxWrap;
  gap?: TFlexboxGap;
  className?: TFlexboxClassname;
  children: TFlexboxChildren;
  as?: TFlexboxAs;
}
