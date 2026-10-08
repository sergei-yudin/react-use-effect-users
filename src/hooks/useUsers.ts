import { useEffect, useState } from "react";
import { fetchUsers } from "../api/usersApi";
import type { User } from "../types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetchUsers(controller.signal)
      .then(setUsers)
      .catch((reason: unknown) => {
        if ((reason as Error).name !== "AbortError") {
          setError("Не удалось загрузить список.");
        }
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { users, loading, error };
}
