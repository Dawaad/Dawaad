export interface ISVGPath {
    clipRule: string;
    d: string;
    fill: string;
    fillRule: "nonzero" | "evenodd" | "inherit" | undefined;
    styles: string;
    transform?: string;
    type: string;
  }