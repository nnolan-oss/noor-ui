import classnames from "classnames";
import React from "react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "../../core/noorThemeProvider/NoorThemeProvider";
import findMatch from "../../utils/findMatch";
import { objectsToString } from "../../utils/objectsToString";
import { type AvatarProps } from "./Avatar.d";

export const Avatar = React.forwardRef<HTMLDivElement | HTMLImageElement | HTMLSpanElement, AvatarProps>(
    ({
        variant,
        size,
        color,
        bordered,
        borderColor,
        className,
        src,
        alt,
        children,
        ...rest
    }, ref) => {
        const { theme } = useTheme();
        const { avatar } = theme.components;
        const { valid, defaultProps, styles } = avatar;
        const { base, variants, sizes, borderColors } = styles;

        variant = variant ?? defaultProps.variant;
        size = size ?? defaultProps.size;
        color = color ?? defaultProps.color;
        bordered = bordered ?? defaultProps.bordered;
        borderColor = borderColor ?? defaultProps.borderColor;
        className = twMerge(defaultProps.className || "", className);

        const avatarBase = objectsToString(base.initial);
        const avatarVariant = objectsToString(
            (variants as any)[findMatch(valid.variants, variant, "circle")]
        );
        const avatarSize = objectsToString(
            (sizes as any)[findMatch(valid.sizes, size, "md")]
        );
        const avatarBorderColor = objectsToString(
            (borderColors as any)[findMatch(valid.borderColors, borderColor, "primary")]
        );


        const classes = twMerge(
            classnames(
                avatarBase,
                avatarSize,
                avatarVariant,
                {
                    [objectsToString(base.bordered)]: bordered,
                    [avatarBorderColor]: bordered,
                }
            ),
            className,
        );

        // Generate placeholder text from alt or use default
        const getPlaceholderText = () => {
            if (alt && alt.trim()) {
                return alt.trim().charAt(0).toUpperCase();
            }
            return "?";
        };

        if (src) {
            return (
                <img
                    {...rest}
                    ref={ref as React.Ref<HTMLImageElement>}
                    src={src}
                    alt={alt || "Avatar"}
                    className={classes}
                />
            );
        }

        if (children) {
            return (
                <div {...rest} ref={ref as React.Ref<HTMLDivElement>} className={classes}>
                    {children}
                </div>
            );
        }

        return (
            <span {...rest} ref={ref as React.Ref<HTMLSpanElement>} className={classes}>
                {getPlaceholderText()}
            </span>
        );
    },
);

Avatar.displayName = "Avatar";