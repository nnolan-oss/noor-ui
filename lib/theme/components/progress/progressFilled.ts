import { type TColors } from "../../../types/generic";

export const progressFilled = (color: TColors) => {
  const colorToVar: Record<TColors, { bg: string; text: string }> = {
    primary: {
      bg: "bg-[var(--noor-color-primary)]",
      text: "text-[var(--noor-color-primary)]",
    },
    secondary: {
      bg: "bg-[var(--noor-color-secondary)]",
      text: "text-[var(--noor-color-secondary)]",
    },
    success: {
      bg: "bg-[var(--noor-color-success)]",
      text: "text-[var(--noor-color-success)]",
    },
    error: {
      bg: "bg-[var(--noor-color-danger)]",
      text: "text-[var(--noor-color-danger)]",
    },
    info: {
      bg: "bg-[var(--noor-color-info)]",
      text: "text-[var(--noor-color-info)]",
    },
    warning: {
      bg: "bg-[var(--noor-color-warning)]",
      text: "text-[var(--noor-color-warning)]",
    },
    white: {
      bg: "bg-white",
      text: "text-white",
    },
  };

  return {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        height: "h-2",
        backgroundColor: "bg-gray-200",
        borderRadius: "rounded-full",
        overflow: "overflow-hidden",
      },
      bar: {
        position: "absolute",
        top: "top-0",
        left: "left-0",
        height: "h-full",
        backgroundColor: colorToVar[color].bg,
        borderRadius: "rounded-full",
        transition: "transition-all duration-300 ease-in-out",
      },
      label: {
        fontSize: "text-sm",
        fontWeight: "font-medium",
        color: "text-gray-700",
        marginBottom: "mb-1",
      },
      value: {
        fontSize: "text-xs",
        fontWeight: "font-medium",
        color: colorToVar[color].text,
        marginTop: "mt-1",
      },
    },
  };
};
