import { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import type { User } from "../types";
import { UserDetailsCard } from "./UserDetailsCard";
import { UserList } from "./UserList";

export function UsersWorkspace() {
  const { users, loading, error } = useUsers();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const selectUser = (user: User) => {
    setSelectedUser((current) => (current?.id === user.id ? current : user));
  };

  return (
    <>
      {loading && <p className="status">Загрузка списка…</p>}
      {error && <p className="error">{error}</p>}
      <div className="layout">
        <UserList
          users={users}
          selectedId={selectedUser?.id ?? null}
          onSelect={selectUser}
        />
        {selectedUser ? (
          <UserDetailsCard user={selectedUser} />
        ) : (
          <section className="details placeholder">
            Выберите пользователя слева
          </section>
        )}
      </div>
    </>
  );
}
