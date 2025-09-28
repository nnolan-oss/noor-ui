import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { createContext, useCallback, useContext, useState } from "react";
import { TbChevronDown } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import findMatch from "../../utils/findMatch";
import { objectsToString } from "../../utils/objectsToString";
import { type AccordionContentProps, type AccordionItemProps, type AccordionProps, type AccordionTriggerProps } from "./Accordion.d";

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

// Context for accordion item state
interface AccordionItemContextType {
  value: string;
  disabled: boolean;
}

const AccordionContext = createContext<AccordionContextType | null>(null);
const AccordionItemContext = createContext<AccordionItemContextType | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion");
  }
  return context;
};

const useAccordionItemContext = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("AccordionTrigger and AccordionContent must be used within an AccordionItem");
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
    const { base, sizes } = styles;

    size = size ?? defaultProps.size;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const [internalValue, setInternalValue] = useState<string | string[]>(
      defaultValue || (type === "multiple" ? [] : "")
    );

    const currentValue = value !== undefined ? value : internalValue;

    const handleValueChange = useCallback((newValue: string | string[]) => {
      console.log('Accordion value change:', { disabled, newValue, currentValue: value });
      if (disabled) return;
      
      if (onValueChange) {
        onValueChange(newValue);
      } else {
        setInternalValue(newValue);
      }
    }, [disabled, onValueChange, value]);

    const accordionBase = objectsToString(base.initial);
    const accordionSize = objectsToString((sizes as any)[findMatch(valid.sizes, size, "md")]);

    const classes = twMerge(
      classnames(
        accordionBase,
        accordionSize,
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

    const itemContextValue: AccordionItemContextType = {
      value,
      disabled: isDisabled,
    };

    return (
      <AccordionItemContext.Provider value={itemContextValue}>
        <div
          ref={ref}
          className={twMerge(
            "border-b border-gray-200 last:border-b-0",
            isDisabled ? "opacity-50 pointer-events-none" : "",
            className
          )}
          data-value={value}
          {...rest}
        >
          {children}
        </div>
      </AccordionItemContext.Provider>
    );
  }
);

// AccordionTrigger Component
export const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...rest }, ref) => {
    const { value, onValueChange, type, collapsible, disabled } = useAccordionContext();
    const { value: itemValue, disabled: itemDisabled } = useAccordionItemContext();
    
    const isDisabled = disabled || itemDisabled;
    const isOpen = type === "multiple" 
      ? Array.isArray(value) && value.includes(itemValue)
      : value === itemValue;

    const handleClick = () => {
      console.log('AccordionTrigger clicked:', { isDisabled, itemValue, isOpen, type, collapsible });
      if (isDisabled) return;

      if (type === "multiple") {
        const currentValues = Array.isArray(value) ? value : [];
        const newValues = isOpen
          ? currentValues.filter(v => v !== itemValue)
          : [...currentValues, itemValue];
        console.log('Multiple accordion - new values:', newValues);
        onValueChange(newValues);
      } else {
        const newValue = isOpen && collapsible ? "" : itemValue;
        console.log('Single accordion - new value:', newValue);
        onValueChange(newValue);
      }
    };

    return (
      <button
        ref={ref}
        type="button"
        onClick={handleClick}
        disabled={isDisabled}
        className={twMerge(
          "flex w-full items-center justify-between py-4 px-4 text-left font-medium transition-colors hover:bg-gray-50 focus:outline-none",
          isOpen ? "bg-gray-50" : "",
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
          <TbChevronDown className="h-4 w-4 text-gray-500" />
        </motion.div>
      </button>
    );
  }
);

// AccordionContent Component
export const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...rest }, ref) => {
    const { value, type } = useAccordionContext();
    const { value: itemValue } = useAccordionItemContext();
    
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
                "p-4 pb-4 text-gray-600",
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
