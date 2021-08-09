export interface Ast {
  type: string;
  body: any;
}

export interface AstNode extends Ast {
  value: any;
  modified?: boolean;
  position?: {
      start: number;
      end: number;
  };
}

export interface Chart {
  label: string;
  expanded?: boolean;
  children: AstNode[];
}
