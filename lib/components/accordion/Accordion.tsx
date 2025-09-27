import React, { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { type AccordionProps, type AccordionItemProps, type AccordionTriggerProps, type AccordionContentProps } from "./Accordion.d";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { twMerge } from "tailwind-merge";
import { objectsToString } from "../../utils/objectsToString";
import findMatch from "../../utils/findMatch";
import classnames from "classnames";

// Context for accordion state
interface AccordionContextType {
  value: string | string[];
  onValueChange: (value: string | string[]) => void;
  type: "single" | "multiple";
  collapsible: boolean;
  disabled: boolean;
  variant: string;
  size: string;
  color: string;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

// Main Accordion Component
export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ 
    children, 
    variant = "default", 
    size = "md", 
    color = "primary", 
    className, 
    type = "single",
    value,
    defaultValue,
    onValueChange,
    collapsible = true,
    disabled = false,
    ...rest 
  }, ref) => {
    const { theme } = useTheme();
    const { accordion } = theme.components;
    const { valid, defaultProps, styles } = accordion;
    const { base, variants, sizes } = styles;

    variant = variant ?? defaultProps.variant;
    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const [internalValue, setInternalValue] = useState<string | string[]>(
      defaultValue || (type === "multiple" ? [] : "")
    );

    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = useCallback((newValue: string | string[]) => {
      if (disabled) return;
      
      if (onValueChange) {
        onValueChange(newValue);
      } else {
        setInternalValue(newValue);
      }
    }, [disabled, onValueChange]);

    const accordionBase = objectsToString(base.initial);
    const accordionVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "default")][
        findMatch(valid.colors, color, "primary")
      ]
    );
    const accordionSize = objectsToString((sizes as any)[findMatch(valid.sizes, size, "md")]);

    const classes = twMerge(
      classnames(
        accordionBase,
        accordionSize,
        accordionVariant,
        {
          "opacity-50 pointer-events-none": disabled,
        }
      ),
      className
    );

    const contextValue: AccordionContextType = {
      value: currentValue,
      onValueChange: handleValueChange,
      type,
      collapsible,
      disabled,
      variant,
      size,
      color,
    };

    return (
      <AccordionContext.Provider value={contextValue}>
        <div ref={ref} className={classes} {...rest}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);

// AccordionItem Component
export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, value, disabled = false, className, ...rest }, ref) => {
    const { disabled: accordionDisabled } = useAccordionContext();
    const isDisabled = disabled || accordionDisabled;

    return (
      <div
        ref={ref}
        className={twMerge(
          "border-b border-gray-200 last:border-b-0",
          {
            "opacity-50 pointer-events-none": isDisabled,
          },
          className
        )}
        data-value={value}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

// AccordionTrigger Component
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...rest }, ref) => {
    const { value, onValueChange, type, collapsible, disabled } = useAccordionContext();
    
    // Get the parent AccordionItem's value
    const getItemValue = () => {
      const itemElement = (ref as any)?.current?.closest('[data-value]');
      return itemElement?.getAttribute('data-value') || '';
    };

    const itemValue = getItemValue();
    const isOpen = type === "multiple" 
      ? Array.isArray(value) && value.includes(itemValue)
      : value === itemValue;

    const handleClick = () => {
      if (disabled) return;

      if (type === "multiple") {
        const currentValues = Array.isArray(value) ? value : [];
        const newValues = isOpen
          ? currentValues.filter(v => v !== itemValue)
          : [...currentValues, itemValue];
        onValueChange(newValues);
      } else {
        onValueChange(isOpen && collapsible ? "" : itemValue);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        disabled={disabled}
        className={twMerge(
          "flex w-full items-center justify-between py-4 px-4 text-left font-medium transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset",
          {
            "bg-gray-50": isOpen,
          },
          className
        )}
        aria-expanded={isOpen}
        {...rest}
      >
        <span className="flex-1">{children}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </motion.div>
      </button>
    );
  }
);

// AccordionContent Component
export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...rest }, ref) => {
    const { value, type } = useAccordionContext();
    
    // Get the parent AccordionItem's value
    const getItemValue = () => {
      const itemElement = (ref as any)?.current?.closest('[data-value]');
      return itemElement?.getAttribute('data-value') || '';
    };

    const itemValue = getItemValue();
    const isOpen = type === "multiple" 
      ? Array.isArray(value) && value.includes(itemValue)
      : value === itemValue;

    return (
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            ref={ref}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className={twMerge(
                "px-4 pb-4 text-gray-600",
                className
              )}
              {...rest}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
);

// Set display names
Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";
