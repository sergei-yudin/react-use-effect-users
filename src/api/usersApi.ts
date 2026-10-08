import type { User, UserDetails } from "../types";

const baseUrl =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data";

async function requestJson<T>(path: string, signal: AbortSignal): Promise<T> {
  const response = await fetch(`${baseUrl}/${path}`, { signal });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json() as Promise<T>;
}

export function fetchUsers(signal: AbortSignal) {
  return requestJson<User[]>("users.json", signal);
}

export function fetchUserDetails(id: number, signal: AbortSignal) {
  return requestJson<UserDetails>(`${id}.json`, signal);
}
