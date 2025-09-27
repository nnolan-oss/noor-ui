import {
  TGridChildren,
  TGridClassname,
  TGridCols,
  TGridRows,
  TGridGap,
  TGridJustify,
  TGridAlign,
  TGridAs,
} from "../../types/components/grid";

export interface GridProps extends React.ComponentProps<"div"> {
  cols?: TGridCols;
  rows?: TGridRows;
  gap?: TGridGap;
  justify?: TGridJustify;
  align?: TGridAlign;
  className?: TGridClassname;
  children: TGridChildren;
  as?: TGridAs;
}
