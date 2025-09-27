import {
  type TFlexboxClassname,
  type TFlexboxDirection,
  type TFlexboxJustify,
  type TFlexboxAlign,
  type TFlexboxWrap,
  type TFlexboxGap,
} from "../../../types/components/flexbox";

export interface IFlexboxStyleTypes {
  defaultProps: {
    direction: TFlexboxDirection;
    justify: TFlexboxJustify;
    align: TFlexboxAlign;
    wrap: TFlexboxWrap;
    gap: TFlexboxGap;
    className: TFlexboxClassname;
  };
  valid: {
    directions: string[];
    justifies: string[];
    aligns: string[];
    wraps: string[];
    gaps: string[];
  };
  styles: {
    base: {
      initial: object;
    };
    directions: {
      row: object;
      column: object;
      "row-reverse": object;
      "column-reverse": object;
    };
    justifies: {
      start: object;
      end: object;
      center: object;
      between: object;
      around: object;
      evenly: object;
    };
    aligns: {
      start: object;
      end: object;
      center: object;
      baseline: object;
      stretch: object;
    };
    wraps: {
      nowrap: object;
      wrap: object;
      "wrap-reverse": object;
    };
    gaps: {
      none: object;
      sm: object;
      md: object;
      lg: object;
      xl: object;
    };
  };
}

export const flexbox: IFlexboxStyleTypes = {
  defaultProps: {
    direction: "row",
    justify: "start",
    align: "start",
    wrap: "nowrap",
    gap: "md",
    className: "",
  },
  valid: {
    directions: ["row", "column", "row-reverse", "column-reverse"],
    justifies: ["start", "end", "center", "between", "around", "evenly"],
    aligns: ["start", "end", "center", "baseline", "stretch"],
    wraps: ["nowrap", "wrap", "wrap-reverse"],
    gaps: ["none", "sm", "md", "lg", "xl"],
  },
  styles: {
    base: {
      initial: {
        display: "flex",
      },
    },
    directions: {
      row: {
        flexDirection: "flex-row",
      },
      column: {
        flexDirection: "flex-col",
      },
      "row-reverse": {
        flexDirection: "flex-row-reverse",
      },
      "column-reverse": {
        flexDirection: "flex-col-reverse",
      },
    },
    justifies: {
      start: {
        justifyContent: "justify-start",
      },
      end: {
        justifyContent: "justify-end",
      },
      center: {
        justifyContent: "justify-center",
      },
      between: {
        justifyContent: "justify-between",
      },
      around: {
        justifyContent: "justify-around",
      },
      evenly: {
        justifyContent: "justify-evenly",
      },
    },
    aligns: {
      start: {
        alignItems: "items-start",
      },
      end: {
        alignItems: "items-end",
      },
      center: {
        alignItems: "items-center",
      },
      baseline: {
        alignItems: "items-baseline",
      },
      stretch: {
        alignItems: "items-stretch",
      },
    },
    wraps: {
      nowrap: {
        flexWrap: "flex-nowrap",
      },
      wrap: {
        flexWrap: "flex-wrap",
      },
      "wrap-reverse": {
        flexWrap: "flex-wrap-reverse",
      },
    },
    gaps: {
      none: {
        gap: "gap-0",
      },
      sm: {
        gap: "gap-2",
      },
      md: {
        gap: "gap-4",
      },
      lg: {
        gap: "gap-6",
      },
      xl: {
        gap: "gap-8",
      },
    },
  },
};
