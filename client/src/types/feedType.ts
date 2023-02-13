export type feedType = {
  id: number;
  text: string;
  user: { id: number; fullName: string; avatar: { link: string | null } };
};

export type feedInit = {
  feeds: feedType[];
  status: null | string;
  error: null | string;
};
