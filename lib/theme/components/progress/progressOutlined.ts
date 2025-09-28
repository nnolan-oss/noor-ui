import { type TColors } from "../../../types/generic";

export const progressOutlined = (color: TColors) => {
  const colorToVar: Record<TColors, { bg: string; border: string; text: string; bar: string }> = {
    primary: {
      bg: "bg-[var(--noor-color-primary)]/10",
      border: "border-[var(--noor-color-primary)]",
      text: "text-[var(--noor-color-primary)]",
      bar: "bg-[var(--noor-color-primary)]",
    },
    secondary: {
      bg: "bg-[var(--noor-color-secondary)]/10",
      border: "border-[var(--noor-color-secondary)]",
      text: "text-[var(--noor-color-secondary)]",
      bar: "bg-[var(--noor-color-secondary)]",
    },
    success: {
      bg: "bg-[var(--noor-color-success)]/10",
      border: "border-[var(--noor-color-success)]",
      text: "text-[var(--noor-color-success)]",
      bar: "bg-[var(--noor-color-success)]",
    },
    error: {
      bg: "bg-[var(--noor-color-danger)]/10",
      border: "border-[var(--noor-color-danger)]",
      text: "text-[var(--noor-color-danger)]",
      bar: "bg-[var(--noor-color-danger)]",
    },
    info: {
      bg: "bg-[var(--noor-color-info)]/10",
      border: "border-[var(--noor-color-info)]",
      text: "text-[var(--noor-color-info)]",
      bar: "bg-[var(--noor-color-info)]",
    },
    warning: {
      bg: "bg-[var(--noor-color-warning)]/10",
      border: "border-[var(--noor-color-warning)]",
      text: "text-[var(--noor-color-warning)]",
      bar: "bg-[var(--noor-color-warning)]",
    },
    white: {
      bg: "bg-gray-50",
      border: "border-white",
      text: "text-white",
      bar: "bg-white",
    },
  };

  return {
    base: {
      container: {
        position: "relative",
        width: "w-full",
        height: "h-2",
        backgroundColor: colorToVar[color].bg,
        border: `border ${colorToVar[color].border}`,
        borderRadius: "rounded-full",
        overflow: "overflow-hidden",
      },
      bar: {
        position: "absolute",
        top: "top-0",
        left: "left-0",
        height: "h-full",
        backgroundColor: colorToVar[color].bar,
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
