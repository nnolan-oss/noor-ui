import { type TVideoClassname, type TVideoFullWidth } from "../../../types/components/video";

export interface IVideoStyleTypes {
    defaultProps: {
        fullWidth: TVideoFullWidth;
        className: TVideoClassname;
    };
    styles: {
        base: {
            initial: object;
            fullWidth: object;
        };
    };
}

export const video: IVideoStyleTypes = {
    defaultProps: {
        fullWidth: false,
        className: "",
    },
    styles: {
        base: {
            initial: {
                display: "block",
                width: "w-full",
                fontSize: "text-sm",
                fontFamily: "font-sans",
                borderRadius: "rounded-xl",
                transition: "transition-all duration-200",
                outline: "outline-none",
                appearance: "appearance-none",
                focus: "focus:outline-none focus:ring-[var(--noor-color-primary)] focus:ring-2 focus:ring-offset-0",
            },
            fullWidth: {
                width: "w-full",
            },
        },
    }
};


