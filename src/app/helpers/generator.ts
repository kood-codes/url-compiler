import { Ast, AstNode } from "../models";
import { COLON, SLASH, EQUAL, HASH } from "./helpers";

export function generator(ast: Ast) {
  let modifiedUrl = "";
  if (ast.type === "url") {
    ast.body.forEach((node: AstNode) => {
      switch (node.type) {
        case "Protocol":
          modifiedUrl += node.value + COLON + SLASH + SLASH;
          break;
        case "Path":
          modifiedUrl += SLASH + node.value;
          break;
        case "Port":
          modifiedUrl += COLON + node.value;
          break;
        case "Fragment":
          modifiedUrl += HASH + node.value;
          break;
        case "QueryParamater":
          if (node.body.value) {
            modifiedUrl +=
              node.body.symbol + node.body.name + EQUAL + node.body.value;
          } else {
            modifiedUrl += node.body.symbol + node.body.name;
          }
          break;
        case "Host":
          if (node.body.subDomain)
            modifiedUrl += `${node.body.subDomain}.${node.body.domain}.${node.body.tld}`;
          else modifiedUrl += `${node.body.domain}.${node.body.tld}`;
          break;
      }
    });
  }
  return modifiedUrl;
}
