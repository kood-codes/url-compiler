import { COLON, SLASH, QUERY, EQUAL, AMPERSAND, HASH } from "./helpers";

const delimiters = [COLON, SLASH, QUERY, EQUAL, AMPERSAND, HASH];

export function tokenizer(input) {
  const tokens = [];
  let current = 0;

  while (current < input.length) {
    let char = input[current];
    if (delimiters.indexOf(char) > -1) {
      tokens.push({
        type: "delimiter",
        value: char,
        position: {
          start: current,
          end: current,
        },
      });
      current++;
      continue;
    } else {
      let identifier = "";
      let start = -1;
      while (current < input.length && delimiters.indexOf(char) === -1) {
        char = input[current];
        start = start === -1 ? current : start;
        if (delimiters.indexOf(char) > -1) {
          continue;
        }
        identifier += char;
        current++;
      }
      tokens.push({
        type: "identifier",
        value: identifier,
        position: {
          start,
          end: current - 1,
        },
      });
      continue;
    }
  }
  return tokens;
}
