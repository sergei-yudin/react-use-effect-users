import { useEffect, useState } from "react";
import { fetchUserDetails } from "../api/usersApi";
import type { UserDetails } from "../types";

export function useUserDetails(userId: number) {
  const [result, setResult] = useState<{
    userId: number;
    data: UserDetails | null;
    error: string;
  } | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetchUserDetails(userId, controller.signal)
      .then((data) => setResult({ userId, data, error: "" }))
      .catch((reason: unknown) => {
        if ((reason as Error).name !== "AbortError") {
          setResult({
            userId,
            data: null,
            error: "Не удалось загрузить данные пользователя.",
          });
        }
      });

    return () => controller.abort();
  }, [userId]);

  const isCurrentResult = result?.userId === userId;
  return {
    data: isCurrentResult ? result.data : null,
    loading: !isCurrentResult,
    error: isCurrentResult ? result.error : "",
  };
}
