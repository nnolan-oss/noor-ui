import { type ListComponentProps, type ListItemComponentProps } from "../../types/components/list";

export interface ListProps extends ListComponentProps {}
export interface ListItemProps extends ListItemComponentProps {}
export interface ListItemPrefixProps extends React.HTMLAttributes<HTMLSpanElement> {}
export interface ListItemSuffixProps extends React.HTMLAttributes<HTMLSpanElement> {}

