import { breadcrumbsDefault } from "./breadcrumbsDefault";

export const breadcrumbs = {
  defaultProps: {
    separator: "/",
    fullWidth: false,
    className: "",
  },
  valid: {
    separators: ["/", "-", ">", "•", "|"],
  },
  styles: {
    base: {
      initial: {
        display: "flex",
        alignItems: "center",
        width: "max-content",
      },
      fullWidth: {
        width: "100%",
      },
    },
  },
};

export { breadcrumbsDefault };
