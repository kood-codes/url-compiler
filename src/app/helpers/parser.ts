import { Ast, AstNode } from "../models";
import {
  isAmpersand,
  isColon,
  isDelimiter,
  isEqual,
  isHash,
  isQuery,
  isSlash,
} from "./helpers";

export function parser(tokens: AstNode[]) {
  const root: Ast = {
    type: "url",
    body: [],
  };
  let isHostParsed = false;
  let token;

  while (tokens.length) {
    token = tokens.shift();
    if (token?.type === "identifier") {
      if (
        tokens[0] &&
        isColon(tokens[0]) &&
        isSlash(tokens[1]) &&
        isSlash(tokens[2])
      ) {
        root.body.push({
          type: "Protocol",
          value: token.value,
        });
        continue;
      }

      if (!isHostParsed) {
        let subDomain;
        let domain;
        const sections = token.value.split(".");
        let tld = sections.pop();
        if (tld?.length === 2 && sections[sections.length - 1] === "co") {
          const tldParts = [sections.pop(), tld];
          tld = tldParts.join(".");
        }
        domain = sections.pop();

        if (sections.length) {
          subDomain = sections.pop();
        }

        root.body.push({
          type: "Host",
          body: {
            subDomain,
            domain,
            tld,
          },
        } as Ast);

        isHostParsed = true;
      } else {
        root.body.push({
          type: "Path",
          value: token.value,
        });
      }
      continue;
    } else {
      if (isQuery(token) || isAmpersand(token)) {
        if (isEqual(tokens[1])) {
          const symbol = token?.value;
          const name = tokens?.shift()?.value;
          const equal = tokens.shift();
          const value = tokens?.shift()?.value;
          root.body.push({
            type: "QueryParamater",
            body: {
              name,
              value,
              symbol,
            },
          });
        } else {
          root.body.push({
            type: "QueryParamater",
            body: {
              name: tokens?.shift()?.value,
            },
          });
        }
        continue;
      }
      if (isColon(token)) {
        if (
          !isDelimiter(tokens[0]) &&
          Number.isInteger(parseInt(tokens[0].value, 10))
        ) {
          root.body.push({
            type: "Port",
            value: parseInt(tokens?.shift()?.value || "", 10),
          });
        }
        continue;
      }
      if (isHash(token)) {
        root.body.push({
          type: "Fragment",
          value: tokens?.shift()?.value,
        });
      }
    }
  }

  return root;
}
