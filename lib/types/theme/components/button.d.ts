export interface ButtonConfig {
  defaultProps?: {
    disabled?: false,
    className?: string,
    style?: object,
  },
  variants?: {
    primary?: {
      default?: "primary",
    }
  },
  startIcon?: {
    defaultProps?: {
      disabled?: false,
      className?: string,
      style?: object,
    },
  },
  endIcon?: {
    defaultProps?: {
      disabled?: false,
      className?: string,
      style?: object,
    },
  }
}