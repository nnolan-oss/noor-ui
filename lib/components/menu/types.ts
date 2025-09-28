export type Placement =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end'
  | 'right-start'
  | 'right-end';

export type Offset = number | { mainAxis?: number; crossAxis?: number };

export type Dismiss = {
  outsidePress?: boolean;
  escapeKey?: boolean;
};

export type Animate = {
  enter?: string;
  exit?: string;
};

export interface MenuProps {
  open?: boolean;
  handler?: (open: boolean) => void;
  placement?: Placement;
  offset?: Offset;
  dismiss?: Dismiss;
  animate?: Animate;
  lockScroll?: boolean;
  allowHover?: boolean;
  children: React.ReactNode;
}