export const stepper = {
  defaultProps: {
    activeStep: 0,
    alternativeLabel: false,
    className: "",
  },
  valid: {},
  styles: {
    base: {
      container: {
        display: "flex",
        width: "w-full",
        gap: "gap-4",
      },
      alternative: {
        alignItems: "items-start",
      },
    },
    step: {
      base: {
        initial: {
          display: "flex",
          flexDirection: "flex-col",
          alignItems: "items-center",
          textAlign: "text-center",
          flex: "flex-1",
        },
        alternative: {
          alignItems: "items-start",
          textAlign: "text-left",
        },
        states: {
          inactive: {
            color: "text-gray-400",
          },
          active: {
            color: "text-primary-600",
          },
          completed: {
            color: "text-primary-600",
          },
        },
        disabled: {
          opacity: "opacity-60",
          cursor: "cursor-not-allowed",
        },
      },
    },
    label: {
      wrapper: {
        display: "inline-flex",
        alignItems: "items-center",
        gap: "gap-2",
      },
      icon: {
        base: {
          display: "inline-flex",
          alignItems: "items-center",
          justifyContent: "justify-center",
          width: "w-6",
          height: "h-6",
          borderRadius: "rounded-full",
          bg: "bg-gray-200",
          color: "text-gray-700",
        },
      },
      text: {
        fontSize: "text-sm",
        fontWeight: "font-medium",
      },
    },
  },
};


