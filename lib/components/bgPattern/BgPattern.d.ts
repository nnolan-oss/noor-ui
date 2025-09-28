import type { TBgPatternClassname, TBgPatternFullWidth, TBgPatternType } from "../../types/components/bgPattern";

export interface BgPatternProps extends React.HTMLAttributes<HTMLDivElement> {
    type?: TBgPatternType;
    className?: TBgPatternClassname;
    fullWidth?: TBgPatternFullWidth;
    colors?: string[]; // Array of colors (hex, rgba, etc.)
    positions?: { x: string; y: string }[]; // Array of position objects for gradient/mask centers
}
