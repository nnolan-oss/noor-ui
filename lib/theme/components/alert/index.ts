import {
  type TAlertClassname,
  type TAlertColors,
  type TAlertVariant,
} from "../../../types/components/alert";
import { themeColors, type TColors } from "../../../types/generic";
import { alertFilled } from "./alertFilled";
import { alertOutlined } from "./alertOutlined";
import { alertText } from "./alertText";

export interface IAlertStyleTypes {
  defaultProps: {
    variant: TAlertVariant;
    color: TAlertColors;
    className: TAlertClassname;
  };
  valid: {
    variants: string[];
    colors: TColors[];
  };
  styles: {
    base: {
      initial: object;
    };
    variants: {
      filled: typeof alertFilled;
      outlined: typeof alertOutlined;
      text: typeof alertText;
    };
  };
}

export const alert: IAlertStyleTypes = {
  defaultProps: {
    variant: "filled",
    color: "primary",
    className: "",
  },
  valid: {
    variants: ["filled", "outlined", "text"],
    colors: [...themeColors],
  },
  styles: {
    base: {
      initial: {
        display: "flex",
        alignItems: "items-center",
        padding: "p-4",
        borderRadius: "rounded-lg",
        border: "border",
        fontSize: "text-sm",
        fontWeight: "font-medium",
        transition: "transition-all",
        gap: "gap-3",
      },
    },
    variants: {
      filled: alertFilled,
      outlined: alertOutlined,
      text: alertText,
    },
  },
};
