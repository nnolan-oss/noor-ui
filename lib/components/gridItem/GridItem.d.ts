import {
  TGridItemChildren,
  TGridItemClassname,
  TGridItemColSpan,
  TGridItemRowSpan,
  TGridItemColStart,
  TGridItemRowStart,
  TGridItemJustify,
  TGridItemAlign,
  TGridItemAs,
} from "../../types/components/gridItem";

export interface GridItemProps extends React.ComponentProps<"div"> {
  colSpan?: TGridItemColSpan;
  rowSpan?: TGridItemRowSpan;
  colStart?: TGridItemColStart;
  rowStart?: TGridItemRowStart;
  justify?: TGridItemJustify;
  align?: TGridItemAlign;
  className?: TGridItemClassname;
  children: TGridItemChildren;
  as?: TGridItemAs;
}
