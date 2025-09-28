import classnames from "classnames";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import React from "react";
import { TbX } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import findMatch from "../../utils/findMatch";
import { objectsToString } from "../../utils/objectsToString";
import { IconButton } from "../iconButton/IconButton";
import { type AlertProps } from "./Alert.d";

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant, color, startIcon, endIcon, className, children, open = true, onClose, ...rest }, ref) => {
    const { theme } = useTheme();
    const { alert } = theme.components;
    const { valid, defaultProps, styles } = alert;
    const { base, variants } = styles;

    variant = variant ?? defaultProps.variant;
    color = color ?? defaultProps.color;
    className = twMerge(defaultProps.className || "", className);

    const alertBase = objectsToString(base.initial);
    const alertVariant = objectsToString(
      (variants as any)[findMatch(valid.variants, variant, "filled")][
        findMatch(valid.colors, color, "primary")
      ],
    );

    const classes = twMerge(
      classnames(
        alertBase,
        alertVariant,
        {
          "flex items-center gap-3": startIcon || endIcon,
        },
      ),
      className,
    );

    // Animation variants
    const alertVariants: Variants = {
      hidden: {
        opacity: 0,
        y: -10,
        scale: 0.98,
      },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.25,
          ease: [0.4, 0, 0.2, 1], 
        },
      },
      exit: {
        opacity: 0,
        y: -10,
        scale: 0.98,
        transition: {
          duration: 0.2,
          ease: [0.4, 0, 0.2, 1],
        },
      },
    };

    const handleClose = () => {
      if (onClose) {
        onClose();
      }
    };

    return (
      <AnimatePresence>
        {open && (
          <motion.div
            {...rest}
            ref={ref}
            className={classes}
            role="alert"
            variants={alertVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {startIcon && (
              <div className="flex-shrink-0 text-2xl">
                {startIcon}
              </div>
            )}
            <div className="flex-1">
              {children}
            </div>
            {!onClose && endIcon && (
              <div className="flex-shrink-0 text-2xl">
                {endIcon}
              </div>
            )}
            {onClose && (
              <IconButton
              size="sm"
              variant="text"
              color="info"
              icon={ <TbX/>}
                onClick={handleClose}/>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    );
  },
);
