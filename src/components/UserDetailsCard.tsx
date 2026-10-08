import { useUserDetails } from "../hooks/useUserDetails";
import type { User } from "../types";
import { getUserAvatarUrl } from "../utils/getUserAvatarUrl";

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

  const avatarUrl = getUserAvatarUrl(data.avatar, data.id);

  return (
    <section className="details">
      <img src={avatarUrl} alt={data.name} />
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
