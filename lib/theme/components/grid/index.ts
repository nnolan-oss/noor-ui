import {
  type TGridClassname,
  type TGridCols,
  type TGridRows,
  type TGridGap,
  type TGridJustify,
  type TGridAlign,
} from "../../../types/components/grid";

export interface IGridStyleTypes {
  defaultProps: {
    cols: TGridCols;
    rows: TGridRows;
    gap: TGridGap;
    justify: TGridJustify;
    align: TGridAlign;
    className: TGridClassname;
  };
  valid: {
    cols: (TGridCols | string)[];
    rows: (TGridRows | string)[];
    gaps: string[];
    justifies: string[];
    aligns: string[];
  };
  styles: {
    base: {
      initial: object;
    };
    cols: {
      1: object;
      2: object;
      3: object;
      4: object;
      5: object;
      6: object;
      7: object;
      8: object;
      9: object;
      10: object;
      11: object;
      12: object;
      auto: object;
    };
    rows: {
      1: object;
      2: object;
      3: object;
      4: object;
      5: object;
      6: object;
      auto: object;
    };
    gaps: {
      none: object;
      sm: object;
      md: object;
      lg: object;
      xl: object;
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
  };
}

export const grid: IGridStyleTypes = {
  defaultProps: {
    cols: 12,
    rows: "auto",
    gap: "md",
    justify: "start",
    align: "start",
    className: "",
  },
  valid: {
    cols: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto"],
    rows: [1, 2, 3, 4, 5, 6, "auto"],
    gaps: ["none", "sm", "md", "lg", "xl"],
    justifies: ["start", "end", "center", "between", "around", "evenly"],
    aligns: ["start", "end", "center", "baseline", "stretch"],
  },
  styles: {
    base: {
      initial: {
        display: "grid",
      },
    },
    cols: {
      1: {
        gridTemplateColumns: "grid-cols-1",
      },
      2: {
        gridTemplateColumns: "grid-cols-2",
      },
      3: {
        gridTemplateColumns: "grid-cols-3",
      },
      4: {
        gridTemplateColumns: "grid-cols-4",
      },
      5: {
        gridTemplateColumns: "grid-cols-5",
      },
      6: {
        gridTemplateColumns: "grid-cols-6",
      },
      7: {
        gridTemplateColumns: "grid-cols-7",
      },
      8: {
        gridTemplateColumns: "grid-cols-8",
      },
      9: {
        gridTemplateColumns: "grid-cols-9",
      },
      10: {
        gridTemplateColumns: "grid-cols-10",
      },
      11: {
        gridTemplateColumns: "grid-cols-11",
      },
      12: {
        gridTemplateColumns: "grid-cols-12",
      },
      auto: {
        gridTemplateColumns: "grid-cols-auto",
      },
    },
    rows: {
      1: {
        gridTemplateRows: "grid-rows-1",
      },
      2: {
        gridTemplateRows: "grid-rows-2",
      },
      3: {
        gridTemplateRows: "grid-rows-3",
      },
      4: {
        gridTemplateRows: "grid-rows-4",
      },
      5: {
        gridTemplateRows: "grid-rows-5",
      },
      6: {
        gridTemplateRows: "grid-rows-6",
      },
      auto: {
        gridTemplateRows: "grid-rows-auto",
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
        alignContent: "content-start",
      },
      end: {
        alignContent: "content-end",
      },
      center: {
        alignContent: "content-center",
      },
      baseline: {
        alignContent: "content-baseline",
      },
      stretch: {
        alignContent: "content-stretch",
      },
    },
  },
};
