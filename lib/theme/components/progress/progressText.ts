import { type TColors } from "../../../types/generic";

export const progressText = (color: TColors) => {
  const colorToVar: Record<TColors, { text: string; border: string }> = {
    primary: {
      text: "text-[var(--noor-color-primary)]",
      border: "border-[var(--noor-color-primary)]/40",
    },
    secondary: {
      text: "text-[var(--noor-color-secondary)]",
      border: "border-[var(--noor-color-secondary)]/40",
    },
    success: {
      text: "text-[var(--noor-color-success)]",
      border: "border-[var(--noor-color-success)]/40",
    },
    error: {
      text: "text-[var(--noor-color-danger)]",
      border: "border-[var(--noor-color-danger)]/40",
    },
    info: {
      text: "text-[var(--noor-color-info)]",
      border: "border-[var(--noor-color-info)]/40",
    },
    warning: {
      text: "text-[var(--noor-color-warning)]",
      border: "border-[var(--noor-color-warning)]/40",
    },
    white: {
      text: "text-white",
      border: "border-white/40",
    },
  };

  return {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        height: "h-1",
        backgroundColor: "bg-transparent",
        border: `border-b ${colorToVar[color].border}`,
        borderRadius: "rounded-none",
        overflow: "overflow-hidden",
      },
      bar: {
        position: "absolute",
        top: "top-0",
        left: "left-0",
        height: "h-full",
        backgroundColor: colorToVar[color].text.replace("text-", "bg-"),
        borderRadius: "rounded-none",
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
