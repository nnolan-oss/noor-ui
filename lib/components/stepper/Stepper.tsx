import React from "react";
import classnames from "classnames";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import { objectsToString } from "../../utils/objectsToString";

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {
  activeStep?: number;
  alternativeLabel?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ activeStep = 0, alternativeLabel = false, className, children, ...rest }, ref) => {
    const { theme } = useTheme();
    const { stepper } = (theme.components as any);
    const { defaultProps, styles } = stepper;
    const { base } = styles;

    activeStep = activeStep ?? defaultProps.activeStep;
    alternativeLabel = alternativeLabel ?? defaultProps.alternativeLabel;
    className = twMerge(defaultProps.className || "", className);

    const containerBase = objectsToString(base.container);
    const classes = twMerge(
      classnames(containerBase, {
        [objectsToString(base.alternative)]: !!alternativeLabel,
      }),
      className,
    );

    const steps = React.Children.toArray(children).filter(Boolean) as React.ReactElement[];

    return (
      <div {...rest} ref={ref} className={classes}>
        {steps.map((child, index) => {
          const state = index < activeStep ? "completed" : index === activeStep ? "active" : "inactive";
          return React.cloneElement(child, {
            key: index,
            index,
            state,
            alternativeLabel,
          } as any);
        })}
      </div>
    );
  }
);

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  index?: number;
  state?: "inactive" | "active" | "completed";
  disabled?: boolean;
  alternativeLabel?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const Step = React.forwardRef<HTMLDivElement, StepProps>(
  ({ index = 0, state = "inactive", disabled = false, alternativeLabel = false, className, children, ...rest }, ref) => {
    const { theme } = useTheme();
    const { stepper } = (theme.components as any);
    const { styles } = stepper;
    const { step } = styles;

    const stepBase = objectsToString(step.base.initial);
    const stateClasses = objectsToString((step.base.states as any)[state]);
    const disabledClasses = disabled ? objectsToString(step.base.disabled) : "";
    const altLabel = alternativeLabel ? objectsToString(step.base.alternative) : "";

    const classes = twMerge(
      classnames(stepBase, stateClasses, disabledClasses, altLabel),
      className,
    );

    return (
      <div {...rest} ref={ref} className={classes} aria-disabled={disabled}>
        {children}
      </div>
    );
  }
);

Step.displayName = "Step";

export interface StepLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export const StepLabel = React.forwardRef<HTMLDivElement, StepLabelProps>(
  ({ icon, className, children, ...rest }, ref) => {
    const { theme } = useTheme();
    const { stepper } = (theme.components as any);
    const { styles } = stepper;
    const { label } = styles;

    const wrapper = objectsToString(label.wrapper);
    const iconBase = objectsToString(label.icon.base);
    const textBase = objectsToString(label.text);

    return (
      <div {...rest} ref={ref} className={twMerge(wrapper, className)}>
        <span className={iconBase}>{icon}</span>
        <span className={textBase}>{children}</span>
      </div>
    );
  }
);

StepLabel.displayName = "StepLabel";


