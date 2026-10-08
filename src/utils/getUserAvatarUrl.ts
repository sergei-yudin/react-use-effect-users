const avatarCount = 70;

export function getUserAvatarUrl(sourceUrl: string, userId: number) {
  const avatarUrl = new URL(sourceUrl);
  const avatarNumber = ((userId - 1) % avatarCount) + 1;

  avatarUrl.searchParams.set("img", String(avatarNumber));
  return avatarUrl.toString();
}
