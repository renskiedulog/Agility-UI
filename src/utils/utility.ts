interface WidthsTypes {
  sm: string;
  md: string;
  lg: string;
  full: string;
}

interface Orientation {
  [key: string]: {
    "col-to-row": string;
    "row-to-col": string;
    row: string;
    col: string;
  };
}

export const widths: WidthsTypes = {
  sm: "w-3/5",
  md: "w-4/5",
  lg: "w-[90%]",
  full: "w-full",
};

export const orientation: Orientation = {
  sm: {
    "col-to-row": "flex-row sm:flex-col",
    "row-to-col": "flex-col sm:flex-row",
    row: "flex-row",
    col: "flex-col",
  },
  md: {
    "col-to-row": "flex-row md:flex-col",
    "row-to-col": "flex-col md:flex-row",
    row: "flex-row",
    col: "flex-col",
  },
  lg: {
    "col-to-row": "flex-row lg:flex-col",
    "row-to-col": "flex-col lg:flex-row",
    row: "flex-row",
    col: "flex-col",
  },
  xl: {
    "col-to-row": "flex-row xl:flex-col",
    "row-to-col": "flex-col xl:flex-row",
    row: "flex-row",
    col: "flex-col",
  },
};
