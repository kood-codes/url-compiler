import { Ast, AstNode } from "../models";

export function transformer(ast: Ast, visitor: any) {
  if (ast.type === "url") {
    ast.body = ast.body.map((node: AstNode) => {
      const visitorFunc = visitor[node.type];
      if (typeof visitorFunc === "function") {
        return visitorFunc(node);
      } else {
        return node;
      }
    });
  }
  return ast;
}
