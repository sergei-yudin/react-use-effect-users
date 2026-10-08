import type { User } from "../types";

type Props = {
  users: User[];
  selectedId: number | null;
  onSelect: (user: User) => void;
};

export function UserList({ users, selectedId, onSelect }: Props) {
  return (
    <section className="list" aria-label="Пользователи">
      {users.map((user) => (
        <button
          className={selectedId === user.id ? "active" : ""}
          onClick={() => onSelect(user)}
          key={user.id}
        >
          {user.name}
        </button>
      ))}
    </section>
  );
}
