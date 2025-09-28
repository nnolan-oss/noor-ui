import { type ReactNode } from "react";
import { type TBreadcrumbsSeparator, type TBreadcrumbsFullWidth, type TBreadcrumbsChildren, type TBreadcrumbsClassname } from "../../types/components/breadcrumbs";

export interface BreadcrumbsProps {
  separator?: TBreadcrumbsSeparator;
  fullWidth?: TBreadcrumbsFullWidth;
  children?: TBreadcrumbsChildren;
  className?: TBreadcrumbsClassname;
}
