export interface ITabsStyleTypes {
  defaultProps: {
    orientation: "horizontal" | "vertical";
    className: string;
  };
  valid: {
    orientations: Array<"horizontal" | "vertical">;
  };
  styles: {
    base: {
      container: object;
      horizontal: object;
      vertical: object;
      header: object;
      headerInner: object;
      indicator: object;
      body: object;
      tab: object;
      tabActive: object;
      tabInactive: object;
      tabHorizontal: object;
      tabVertical: object;
      panel: object;
    };
  };
}

export const tabs: ITabsStyleTypes = {
  defaultProps: {
    orientation: "horizontal",
    className: "",
  },
  valid: {
    orientations: ["horizontal", "vertical"],
  },
  styles: {
    base: {
      container: {
        display: "flex",
        width: "w-full",
        gap: "gap-3",
      },
      horizontal: {
        flexDirection: "flex-col",
      },
      vertical: {
        flexDirection: "flex-row",
      },
      header: {
        position: "relative",
        display: "flex",
        borderRadius: "rounded-lg",
        backgroundColor: "bg-gray-100",
        padding: "p-1",
        overflow: "overflow-hidden",
      },
      headerInner: {
        position: "relative",
        display: "flex gap-1",
        zIndex: "z-0",
      },
      indicator: {
        position: "absolute",
        top: "top-0",
        left: "left-0",
        borderRadius: "rounded-md",
        backgroundColor: "bg-white",
        boxShadow: "shadow",
        zIndex: "z-10",
      },
      body: {
        width: "w-full",
      },
      tab: {
        position: "relative",
        zIndex: "z-20",
        fontWeight: "font-medium",
        color: "text-gray-600",
        transition: "transition-colors",
        borderRadius: "rounded-md",
        outline: "focus:outline-none",
      },
      tabActive: {
        color: "text-gray-900",
      },
      tabInactive: {
        color: "text-gray-600",
      },
      tabHorizontal: {
        paddingY: "py-2",
        paddingX: "px-3",
      },
      tabVertical: {
        paddingY: "py-2",
        paddingX: "px-3",
      },
      panel: {
        paddingTop: "pt-2",
      },
    },
  },
};

export type { ITabsStyleTypes as TabsStyle };


