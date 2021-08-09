export function transformer(ast, visitor) {
  if (ast.type === "url") {
    ast.body = ast.body.map((node) => {
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
