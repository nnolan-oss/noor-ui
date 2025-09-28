"use client";
import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  type PopoverProps,
  type PopoverTriggerProps,
  type PopoverContentProps,
} from "./Popover.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

// Context for popover state
interface PopoverContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger: "click" | "hover" | "focus" | "manual";
  placement: string;
  offset: number;
  arrow: boolean;
  closeOnEscape: boolean;
  closeOnOutsideClick: boolean;
  portal: boolean;
  disabled: boolean;
  variant: string;
  size: string;
  color: string;
  triggerRef: React.RefObject<HTMLElement | null>;
  contentRef: React.RefObject<HTMLDivElement | null>;
}

const PopoverContext = createContext<PopoverContextType | null>(null);

const usePopoverContext = () => {
  const context = useContext(PopoverContext);
  if (!context) {
    throw new Error("Popover components must be used within a Popover");
  }
  return context;
};

// Main Popover Component
export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      children,
      variant = "default",
      size = "md",
      color = "primary",
      className,
      open,
      defaultOpen = false,
      onOpenChange,
      trigger = "click",
      placement = "bottom",
      offset = 8,
      arrow = true,
      closeOnEscape = true,
      closeOnOutsideClick = true,
      portal = true,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    const { theme } = useTheme();
    const { popover } = theme.components;
    const { valid, defaultProps, styles } = popover;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const [internalOpen, setInternalOpen] = useState(defaultOpen);
    const triggerRef = useRef<HTMLElement | null>(null);
    const contentRef = useRef<HTMLDivElement | null>(null);

    const currentOpen = open !== undefined ? open : internalOpen;

    const handleOpenChange = useCallback(
      (newOpen: boolean) => {
        if (disabled) return;

        if (onOpenChange) {
          onOpenChange(newOpen);
        } else {
          setInternalOpen(newOpen);
        }
      },
      [disabled, onOpenChange]
    );

    // Handle outside click
    useEffect(() => {
      if (!currentOpen || !closeOnOutsideClick || trigger === "manual") return;

      const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as Node;
        if (
          triggerRef.current &&
          contentRef.current &&
          !triggerRef.current.contains(target) &&
          !contentRef.current.contains(target)
        ) {
          handleOpenChange(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, [currentOpen, closeOnOutsideClick, trigger, handleOpenChange]);

    // Handle escape key
    useEffect(() => {
      if (!currentOpen || !closeOnEscape || trigger === "manual") return;

      const handleEscape = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          handleOpenChange(false);
        }
      };

      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }, [currentOpen, closeOnEscape, trigger, handleOpenChange]);

    const popoverBase = objectsToString(base.initial);
    const popoverVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "default")][
        findMatch(valid.colors, color, "primary")
      ]
    );
    const popoverSize = objectsToString(
      (sizes as any)[findMatch(valid.sizes, size, "md")]
    );

    const classes = twMerge(
      classnames(popoverBase, popoverSize, popoverVariant, {
        "opacity-50 pointer-events-none": disabled,
      }),
      className
    );

    const contextValue: PopoverContextType = {
      open: currentOpen,
      onOpenChange: handleOpenChange,
      trigger,
      placement,
      offset,
      arrow,
      closeOnEscape,
      closeOnOutsideClick,
      portal,
      disabled,
      variant,
      size,
      color,
      triggerRef,
      contentRef,
    };

    return (
      <PopoverContext.Provider value={contextValue}>
        <div ref={ref} className={classes} {...rest}>
          {children}
        </div>
      </PopoverContext.Provider>
    );
  }
);

// PopoverTrigger Component
export const PopoverTrigger = React.forwardRef<
  HTMLElement,
  PopoverTriggerProps
>(({ children, asChild = false, className, ...rest }, ref) => {
  const { open, onOpenChange, trigger, disabled } = usePopoverContext();

  const handleClick = () => {
    if (disabled || trigger !== "click") return;
    onOpenChange(!open);
  };

  const handleMouseEnter = () => {
    if (disabled || trigger !== "hover") return;
    onOpenChange(true);
  };

  const handleMouseLeave = () => {
    if (disabled || trigger !== "hover") return;
    onOpenChange(false);
  };

  const handleFocus = () => {
    if (disabled || trigger !== "focus") return;
    onOpenChange(true);
  };

  const handleBlur = () => {
    if (disabled || trigger !== "focus") return;
    onOpenChange(false);
  };

  const triggerProps = {
    ref: ref as any,
    className: twMerge("focus:outline-none", className),
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...rest,
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...triggerProps,
      ...(children.props || {}),
    } as any);
  }

  return (
    <button type="button" {...triggerProps}>
      {children}
    </button>
  );
});

// PopoverContent Component
export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  PopoverContentProps
>(
  (
    {
      children,
      className,
      side = "bottom",
      align = "center",
      sideOffset = 8,
      alignOffset = 0,
      collisionPadding = 0,
      arrowPadding = 8,
      sticky = "partial",
      hideWhenDetached = false,
      ...rest
    },
    _ref
  ) => {
    const {
      open,
      placement,
      arrow,
      portal,
      variant,
      size,
      color,
      triggerRef,
      contentRef,
    } = usePopoverContext();

    const { theme } = useTheme();
    const { popover } = theme.components;
    const { valid, styles } = popover;
    const { variants, sizes } = styles;

    const contentVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "default")][
        findMatch(valid.colors, color, "primary")
      ]
    );
    const contentSize = objectsToString(
      (sizes as any)[findMatch(valid.sizes, size, "md")]
    );

    const contentClasses = twMerge(
      classnames(
        "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-white p-4 shadow-md outline-none",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        contentVariant,
        contentSize
      ),
      className
    );

    // State for position
    const [position, setPosition] = useState({ top: 0, left: 0 });

    // Calculate position based on trigger element
    const calculatePosition = () => {
      if (!triggerRef.current) return { top: 0, left: 0 };

      const triggerRect = triggerRef.current.getBoundingClientRect();
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;

      const actualSide = side || placement?.split("-")[0] || "bottom";
      const actualAlign = align || placement?.split("-")[1] || "center";

      let top = 0;
      let left = 0;

      // Calculate vertical position
      if (actualSide === "top") {
        top = triggerRect.top + scrollY - sideOffset;
      } else if (actualSide === "bottom") {
        top = triggerRect.bottom + scrollY + sideOffset;
      } else {
        // For left/right positioning, center vertically
        top = triggerRect.top + scrollY + triggerRect.height / 2;
      }

      // Calculate horizontal position
      if (actualSide === "left") {
        left = triggerRect.left + scrollX - sideOffset;
      } else if (actualSide === "right") {
        left = triggerRect.right + scrollX + sideOffset;
      } else {
        // For top/bottom positioning, align horizontally
        if (actualAlign === "start") {
          left = triggerRect.left + scrollX + alignOffset;
        } else if (actualAlign === "end") {
          left = triggerRect.right + scrollX - alignOffset;
        } else {
          // center
          left =
            triggerRect.left + scrollX + triggerRect.width / 2 + alignOffset;
        }
      }

      return { top, left };
    };

    // Update position when popover opens or trigger changes
    useEffect(() => {
      if (open && triggerRef.current) {
        const newPosition = calculatePosition();
        setPosition(newPosition);
      }
    }, [open, side, align, sideOffset, alignOffset, placement]);

    // Update position on scroll/resize
    useEffect(() => {
      if (!open) return;

      const updatePosition = () => {
        const newPosition = calculatePosition();
        setPosition(newPosition);
      };

      window.addEventListener("scroll", updatePosition, true);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition, true);
        window.removeEventListener("resize", updatePosition);
      };
    }, [open, side, align, sideOffset, alignOffset, placement]);

    // Filter out conflicting props for motion.div
    const { onDrag, onDragStart, onDragEnd, ...motionProps } = rest as any;

    const content = (
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{
          duration: 0.2,
          ease: "easeOut",
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={contentClasses}
        data-side={side}
        data-align={align}
        style={{
          position: portal ? "absolute" : "relative",
          ...(portal && position),
          ...(align === "center" &&
            !["left", "right"].includes(side) && {
              transform: "translateX(-50%)",
            }),
        }}
        {...motionProps}
      >
        {children}
        {arrow && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute h-2 w-2 rotate-45 bg-white border border-gray-200"
            style={{
              [side]: "-4px",
              [align === "start" ? "left" : align === "end" ? "right" : "left"]:
                align === "center"
                  ? "50%"
                  : align === "start"
                    ? "12px"
                    : "calc(100% - 12px)",
              transform: align === "center" ? "translateX(-50%)" : "none",
            }}
          />
        )}
      </motion.div>
    );

    if (!open) return null;

    if (portal) {
      return (
        <AnimatePresence>
          {open && (
            <div className="fixed inset-0 pointer-events-none z-50">
              {content}
            </div>
          )}
        </AnimatePresence>
      );
    }

    return <AnimatePresence>{open && content}</AnimatePresence>;
  }
);

// Set display names
Popover.displayName = "Popover";
PopoverTrigger.displayName = "PopoverTrigger";
PopoverContent.displayName = "PopoverContent";
