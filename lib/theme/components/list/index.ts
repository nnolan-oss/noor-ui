export const list = {
  defaultProps: {
    dense: false,
    divided: false,
    className: "",
    item: {
      selected: false,
      disabled: false,
      className: "",
    },
  },
  valid: {},
  styles: {
    base: {
      initial: {
        display: "flex",
        flexDirection: "flex-col",
        width: "w-full",
        gap: "gap-1",
      },
      dense: {
        gap: "gap-0.5",
      },
      divided: {
        divide: "divide-y divide-gray-200",
      },
    },
    item: {
      base: {
        initial: {
          display: "flex",
          alignItems: "items-center",
          justifyContent: "justify-between",
          px: "px-2",
          py: "py-1",
          borderRadius: "rounded-md",
          color: "text-black dark:text-white hover:text-black",
          hover: "hover:bg-gray-100",
          transition: "transition-colors",
          disabled: "disabled:opacity-50 disabled:pointer-events-none",
        },
        selected: {
          bg: "bg-gray-100",
          color: "text-white dark:text-black",
        },
        disabled: {
          opacity: "opacity-60",
          cursor: "cursor-not-allowed",
        },
      },
      prefix: {
        marginRight: "mr-2",
        display: "inline-flex",
        alignItems: "items-center",
      },
      suffix: {
        marginLeft: "ml-2",
        display: "inline-flex",
        alignItems: "items-center",
      },
    },
  },
};
