import {
  type TGridItemClassname,
  type TGridItemColSpan,
  type TGridItemRowSpan,
  type TGridItemColStart,
  type TGridItemRowStart,
  type TGridItemJustify,
  type TGridItemAlign,
} from "../../../types/components/gridItem";

export interface IGridItemStyleTypes {
  defaultProps: {
    colSpan: TGridItemColSpan;
    rowSpan: TGridItemRowSpan;
    colStart: TGridItemColStart;
    rowStart: TGridItemRowStart;
    justify: TGridItemJustify;
    align: TGridItemAlign;
    className: TGridItemClassname;
  };
  valid: {
    colSpans: (TGridItemColSpan | string)[];
    rowSpans: (TGridItemRowSpan | string)[];
    colStarts: (TGridItemColStart | string)[];
    rowStarts: (TGridItemRowStart | string)[];
    justifies: string[];
    aligns: string[];
  };
  styles: {
    base: {
      initial: object;
    };
    colSpans: {
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
      full: object;
    };
    rowSpans: {
      1: object;
      2: object;
      3: object;
      4: object;
      5: object;
      6: object;
      auto: object;
      full: object;
    };
    colStarts: {
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
      13: object;
      auto: object;
    };
    rowStarts: {
      1: object;
      2: object;
      3: object;
      4: object;
      5: object;
      6: object;
      7: object;
      auto: object;
    };
    justifies: {
      start: object;
      end: object;
      center: object;
      stretch: object;
    };
    aligns: {
      start: object;
      end: object;
      center: object;
      stretch: object;
    };
  };
}

export const gridItem: IGridItemStyleTypes = {
  defaultProps: {
    colSpan: "auto",
    rowSpan: "auto",
    colStart: "auto",
    rowStart: "auto",
    justify: "stretch",
    align: "stretch",
    className: "",
  },
  valid: {
    colSpans: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, "auto", "full"],
    rowSpans: [1, 2, 3, 4, 5, 6, "auto", "full"],
    colStarts: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, "auto"],
    rowStarts: [1, 2, 3, 4, 5, 6, 7, "auto"],
    justifies: ["start", "end", "center", "stretch"],
    aligns: ["start", "end", "center", "stretch"],
  },
  styles: {
    base: {
      initial: {
        display: "block",
        position: "relative",
      },
    },
    colSpans: {
      1: {
        gridColumn: "col-span-1",
      },
      2: {
        gridColumn: "col-span-2",
      },
      3: {
        gridColumn: "col-span-3",
      },
      4: {
        gridColumn: "col-span-4",
      },
      5: {
        gridColumn: "col-span-5",
      },
      6: {
        gridColumn: "col-span-6",
      },
      7: {
        gridColumn: "col-span-7",
      },
      8: {
        gridColumn: "col-span-8",
      },
      9: {
        gridColumn: "col-span-9",
      },
      10: {
        gridColumn: "col-span-10",
      },
      11: {
        gridColumn: "col-span-11",
      },
      12: {
        gridColumn: "col-span-12",
      },
      auto: {
        gridColumn: "col-auto",
      },
      full: {
        gridColumn: "col-span-full",
      },
    },
    rowSpans: {
      1: {
        gridRow: "row-span-1",
      },
      2: {
        gridRow: "row-span-2",
      },
      3: {
        gridRow: "row-span-3",
      },
      4: {
        gridRow: "row-span-4",
      },
      5: {
        gridRow: "row-span-5",
      },
      6: {
        gridRow: "row-span-6",
      },
      auto: {
        gridRow: "row-auto",
      },
      full: {
        gridRow: "row-span-full",
      },
    },
    colStarts: {
      1: {
        gridColumnStart: "col-start-1",
      },
      2: {
        gridColumnStart: "col-start-2",
      },
      3: {
        gridColumnStart: "col-start-3",
      },
      4: {
        gridColumnStart: "col-start-4",
      },
      5: {
        gridColumnStart: "col-start-5",
      },
      6: {
        gridColumnStart: "col-start-6",
      },
      7: {
        gridColumnStart: "col-start-7",
      },
      8: {
        gridColumnStart: "col-start-8",
      },
      9: {
        gridColumnStart: "col-start-9",
      },
      10: {
        gridColumnStart: "col-start-10",
      },
      11: {
        gridColumnStart: "col-start-11",
      },
      12: {
        gridColumnStart: "col-start-12",
      },
      13: {
        gridColumnStart: "col-start-13",
      },
      auto: {
        gridColumnStart: "col-start-auto",
      },
    },
    rowStarts: {
      1: {
        gridRowStart: "row-start-1",
      },
      2: {
        gridRowStart: "row-start-2",
      },
      3: {
        gridRowStart: "row-start-3",
      },
      4: {
        gridRowStart: "row-start-4",
      },
      5: {
        gridRowStart: "row-start-5",
      },
      6: {
        gridRowStart: "row-start-6",
      },
      7: {
        gridRowStart: "row-start-7",
      },
      auto: {
        gridRowStart: "row-start-auto",
      },
    },
    justifies: {
      start: {
        justifySelf: "justify-self-start",
      },
      end: {
        justifySelf: "justify-self-end",
      },
      center: {
        justifySelf: "justify-self-center",
      },
      stretch: {
        justifySelf: "justify-self-stretch",
      },
    },
    aligns: {
      start: {
        alignSelf: "self-start",
      },
      end: {
        alignSelf: "self-end",
      },
      center: {
        alignSelf: "self-center",
      },
      stretch: {
        alignSelf: "self-stretch",
      },
    },
  },
};
