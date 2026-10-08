import { useUserDetails } from "../hooks/useUserDetails";
import type { User } from "../types";

type Props = {
  user: User;
};

export function UserDetailsCard({ user }: Props) {
  const { data, loading, error } = useUserDetails(user.id);

  if (loading) {
    return (
      <section className="details status">
        <span className="spinner" />
        Загрузка профиля…
      </section>
    );
  }

  if (error) {
    return (
      <section className="details error" role="alert">
        {error}
      </section>
    );
  }

  if (!data) return null;

  return (
    <section className="details">
      <img src={data.avatar} alt={data.name} />
      <h2>{data.name}</h2>
      <dl>
        <div>
          <dt>Город</dt>
          <dd>{data.details.city}</dd>
        </div>
        <div>
          <dt>Компания</dt>
          <dd>{data.details.company}</dd>
        </div>
        <div>
          <dt>Должность</dt>
          <dd>{data.details.position}</dd>
        </div>
      </dl>
    </section>
  );
}
