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
            container: object;
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
            },
            container: {
                position: "relative",
                overflow: "overflow-hidden",
                borderRadius: "rounded-xl"
            },
            fullWidth: {
                width: "w-full",
            },
        },
    }
};


