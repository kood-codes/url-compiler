import { AstNode, Chart } from "../models";

export { generator } from "./generator";
export { parser } from "./parser";
export { tokenizer } from "./tokenizer";
export { transformer } from "./transformer";

export function mapAstToChart(ast: AstNode): Chart {
  const { type, body } = ast;
  return {
    label: type,
    expanded: true,
    children: body.map((child: AstNode) => {
      if (!child?.body) {
        return {
          label: child.type,
          value: child.value,
          ...(child.modified ? { modified: true } : null),
        };
      }
      const arr = [];
      for (const key in child.body) {
        if (child.body.hasOwnProperty(key) && key !== "modified") {
          arr.push({
            label: key,
            value: child.body[key],
            expanded: true,
            ...(child.body.modified ? { modified: true } : null),
          });
        }
      }
      return {
        label: child.type,
        children: arr,
        expanded: true,
        ...(child.body.modified ? { modified: true } : null),
      };
    }),
  };
}
