export const COLON = ":";
export const SLASH = "/";
export const QUERY = "?";
export const EQUAL = "=";
export const AMPERSAND = "&";
export const HASH = "#";

export function isDelimiter(token) {
  return token.type === "delimiter";
}

export function isSlash(token) {
  return isDelimiter(token) && token.value === SLASH;
}

export function isColon(token) {
  return isDelimiter(token) && token.value === COLON;
}

export function isHash(token) {
  return isDelimiter(token) && token.value === HASH;
}

export function isQuery(token) {
  return isDelimiter(token) && token.value === QUERY;
}

export function isAmpersand(token) {
  return isDelimiter(token) && token.value === AMPERSAND;
}

export function isEqual(token) {
  return isDelimiter(token) && token.value === EQUAL;
}
