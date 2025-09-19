import { theme } from "../theme";


// Automatically extract component names from theme
export type KnownComponents = keyof typeof theme;

// Helper type to add new components to the theme system
export type AddComponent<T extends string> = KnownComponents | T;

// Base types for component configuration
export type ComponentDefaultProps = Record<string, any>;
export type ComponentValidProps = Record<string, string[]>;
export type ComponentStyles = Record<string, any>;

// Generic component configuration interface
export interface ComponentConfig<TDefaultProps = ComponentDefaultProps, TValidProps = ComponentValidProps, TStyles = ComponentStyles> {
  defaultProps?: TDefaultProps;
  valid?: TValidProps;
  styles?: TStyles;
}

// Restrictive theme configuration that only allows known components
export type ThemeConfig = {
  [K in KnownComponents]?: ComponentConfig;
};

// Utility type to extract component names from theme
export type ThemeComponentNames<T extends ThemeConfig> = keyof T;

// Utility type to get specific component configuration
export type ComponentThemeConfig<T extends ThemeConfig, K extends ThemeComponentNames<T>> = T[K];

// Utility type to get default props for a specific component
export type ComponentDefaultPropsType<T extends ThemeConfig, K extends ThemeComponentNames<T>> = 
  T[K] extends ComponentConfig<infer TDefaultProps, any, any> 
    ? TDefaultProps 
    : never;

// Utility type to get valid props for a specific component
export type ComponentValidPropsType<T extends ThemeConfig, K extends ThemeComponentNames<T>> = 
  T[K] extends ComponentConfig<any, infer TValidProps, any> 
    ? TValidProps 
    : never;

// Utility type to get styles for a specific component
export type ComponentStylesType<T extends ThemeConfig, K extends ThemeComponentNames<T>> = 
  T[K] extends ComponentConfig<any, any, infer TStyles> 
    ? TStyles 
    : never;