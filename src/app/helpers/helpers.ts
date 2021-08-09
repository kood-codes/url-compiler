import { AstNode } from "../models";

export const COLON = ":";
export const SLASH = "/";
export const QUERY = "?";
export const EQUAL = "=";
export const AMPERSAND = "&";
export const HASH = "#";

export function isDelimiter(token?: AstNode) {
  return token?.type === "delimiter";
}

export function isSlash(token?: AstNode) {
  return isDelimiter(token) && token?.value === SLASH;
}

export function isColon(token?: AstNode) {
  return isDelimiter(token) && token?.value === COLON;
}

export function isHash(token?: AstNode) {
  return isDelimiter(token) && token?.value === HASH;
}

export function isQuery(token?: AstNode) {
  return isDelimiter(token) && token?.value === QUERY;
}

export function isAmpersand(token?: AstNode) {
  return isDelimiter(token) && token?.value === AMPERSAND;
}

export function isEqual(token?: AstNode) {
  return isDelimiter(token) && token?.value === EQUAL;
}
