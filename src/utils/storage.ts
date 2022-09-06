import { Token } from "@/types/data";

const TOKEN_KEY = 'GEEK_H5'

export function setToken(token: Token): void {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

export function getToken(): Token {
  return JSON.parse(localStorage.getItem(TOKEN_KEY) || '{}')
}

export function removeToken(): boolean {
  return !!getToken().token
}

export function hasToken(): boolean {
  return !!getToken().token
}