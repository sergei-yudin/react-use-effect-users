export type User = {
  id: number;
  name: string;
};

export type UserDetails = User & {
  avatar: string;
  details: {
    city: string;
    company: string;
    position: string;
  };
};
