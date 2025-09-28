import type { TBgPatternClassname, TBgPatternFullWidth, TBgPatternType } from "../../../types/components/bgPattern";

export interface IBgPatternStyleTypes {
    defaultProps: {
        fullWidth: TBgPatternFullWidth;
        className: TBgPatternClassname;
        type: TBgPatternType;
        variant: string;
    };
    styles: {
        base: {
            initial: object;
            fullWidth: object;
        };
        variants: Record<TBgPatternType, Record<string, string>>;
    };
}

export const bgPattern: IBgPatternStyleTypes = {
    defaultProps: {
        fullWidth: false,
        className: "",
        type: "gradient",
        variant: "default",
    },
    styles: {
        base: {
            initial: {
                display: "block",
                width: "w-full",
                position: "absolute",
                zIndex: "inset-0 z-0",
            },
            fullWidth: {
                width: "w-full",
            },
        },
        variants: {
            gradient: {
                default: "bg-[radial-gradient(125%_125%_at_{posX0}_{posY0},{color0}_40%,{color1}_100%)]",
                "ocean-abyss": "bg-[radial-gradient(ellipse_80%_60%_at_{posX0}_{posY0},{color0},transparent_70%),{color1}]",
                "emerald-radial-glow": "[background-image:radial-gradient(circle_500px_at_{posX0}_{posY0},{color0},transparent)]",
                "moonlight-silver": "[background-image:radial-gradient(circle_at_{posX0}_{posY0},{color0}_0%,{color1}_25%,{color2}_35%,transparent_50%)] [background-size:100%_100%]",
                "cosmic-nebula": "bg-[radial-gradient(ellipse_110%_70%_at_{posX0}_{posY0},{color0},transparent_55%),radial-gradient(ellipse_130%_60%_at_{posX1}_{posY1},{color1},transparent_65%),radial-gradient(ellipse_80%_90%_at_{posX2}_{posY2},{color2},transparent_50%),radial-gradient(ellipse_100%_40%_at_{posX3}_{posY3},{color3},transparent_45%),{color4}]",
            },
            geometric: {
                default: "[background-image:linear-gradient(to_right,{color0}_1px,transparent_1px),linear-gradient(to_bottom,{color0}_1px,transparent_1px)] [background-size:32px_32px] [-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_{posX0}_{posY0},#000_50%,transparent_90%)] [mask-image:radial-gradient(ellipse_80%_80%_at_{posX0}_{posY0},#000_50%,transparent_90%)]",
                "diagonal-fade-top-left": "[background-image:linear-gradient(to_right,{color0}_1px,transparent_1px),linear-gradient(to_bottom,{color0}_1px,transparent_1px)] [background-size:32px_32px] [-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_{posX0}_{posY0},#000_50%,transparent_90%)] [mask-image:radial-gradient(ellipse_80%_80%_at_{posX0}_{posY0},#000_50%,transparent_90%)]",
                "top-fade-grid": "[background-image:linear-gradient(to_right,{color0}_1px,transparent_1px),linear-gradient(to_bottom,{color0}_1px,transparent_1px)] [background-size:20px_30px] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_{posX0}_{posY0},#000_60%,transparent_100%)] [mask-image:radial-gradient(ellipse_70%_60%_at_{posX0}_{posY0},#000_60%,transparent_100%)]",
                "bottom-fade-grid": "[background-image:linear-gradient(to_right,{color0}_1px,transparent_1px),linear-gradient(to_bottom,{color0}_1px,transparent_1px)] [background-size:20px_30px] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_{posX0}_{posY0},#000_60%,transparent_100%)] [mask-image:radial-gradient(ellipse_70%_60%_at_{posX0}_{posY0},#000_60%,transparent_100%)]",
                "diagonal-fade-bottom-right": "[background-image:linear-gradient(to_right,{color0}_1px,transparent_1px),linear-gradient(to_bottom,{color0}_1px,transparent_1px)] [background-size:32px_32px] [-webkit-mask-image:radial-gradient(ellipse_80%_80%_at_{posX0}_{posY0},#000_50%,transparent_90%)] [mask-image:radial-gradient(ellipse_80%_80%_at_{posX0}_{posY0},#000_50%,transparent_90%)]",
                "diagonal-fade-center": "[background-image:linear-gradient(to_right,{color0}_1px,transparent_1px),linear-gradient(to_bottom,{color0}_1px,transparent_1px)] [background-size:32px_32px] [-webkit-mask-image:radial-gradient(ellipse_60%_60%_at_{posX0}_{posY0},#000_30%,transparent_70%)] [mask-image:radial-gradient(ellipse_60%_60%_at_{posX0}_{posY0},#000_30%,transparent_70%)]",
                "magenta-orb-grid": "bg-[{color0}] [background-image:linear-gradient(to_right,{color1}_1px,transparent_1px),linear-gradient(to_bottom,{color1}_1px,transparent_1px),radial-gradient(circle_at_{posX0}_{posY0},{color2}_0%,{color3}_40%,transparent_70%)] [background-size:40px_40px,40px_40px,100%_100%]",
                "dark-sphere-grid": "bg-[{color0}] [background-image:linear-gradient(to_right,{color1}_1px,transparent_1px),linear-gradient(to_bottom,{color1}_1px,transparent_1px),radial-gradient(circle_at_{posX0}_{posY0},{color2}_0%,transparent_70%)] [background-size:32px_32px,32px_32px,100%_100%]",
            },
            decorative: {
                default: "bg-[radial-gradient(125%_125%_at_{posX0}_{posY0},{color0}_40%,{color1}_100%)]",
                "teal-glow": "[background-image:radial-gradient(125%_125%_at_{posX0}_{posY0},{color0}_40%,{color1}_100%)] [background-size:100%_100%]",
                "dark-horizon-glow": "bg-[radial-gradient(125%_125%_at_{posX0}_{posY0},{color0}_40%,{color1}_100%)]",
                "mystic-purple-orb": "bg-[radial-gradient(circle_at_{posX0}_{posY0},{color0}_0%,{color1}_25%,{color2}_50%,{color3}_75%,{color4}_100%)]",
            },
            effects: {
                default: "bg-[linear-gradient(135deg,{color0}_0%,{color1}_25%,{color2}_75%,{color3}_100%)]",
                "peachy-mint-dream": "bg-[linear-gradient(135deg,{color0}_0%,{color1}_25%,{color2}_75%,{color3}_100%)]",
                "peachy-sunrise-glow": "[background-image:linear-gradient(180deg,{color0}_0%,{color1}_25%,{color2}_50%,{color3}_75%,{color4}_100%),radial-gradient(circle_at_{posX0}_{posY0},{color5}_0%,transparent_40%),radial-gradient(circle_at_{posX1}_{posY1},{color6}_0%,transparent_50%),radial-gradient(circle_at_{posX2}_{posY2},{color7}_0%,transparent_45%)]",
                "purple-glow-right": "bg-[{color0}] [background-image:radial-gradient(circle_at_{posX0}_{posY0},{color1},transparent_70%)] [filter:blur(80px)] bg-no-repeat",
                "northern-aurora": "bg-[radial-gradient(ellipse_70%_55%_at_{posX0}_{posY0},{color0},transparent_50%),radial-gradient(ellipse_160%_130%_at_{posX1}_{posY1},{color1},transparent_60%),radial-gradient(ellipse_160%_130%_at_{posX2}_{posY2},{color2},transparent_65%),radial-gradient(ellipse_110%_50%_at_{posX3}_{posY3},{color3},transparent_40%),{color4}]",
                "volcanic-ember": "bg-[radial-gradient(ellipse_120%_70%_at_{posX0}_{posY0},{color0},transparent_52%),radial-gradient(ellipse_160%_45%_at_{posX1}_{posY1},{color1},transparent_58%),radial-gradient(ellipse_85%_100%_at_{posX2}_{posY2},{color2},transparent_46%),{color3}]",
            },
        },
    },
};