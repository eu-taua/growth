import { Ipostcard } from "../../../utils/interfaces";

export const searchPostsToRender = (
  posts: Ipostcard[] | undefined,
  filter: string
) => {
  if (!filter) return posts;
  return posts?.filter(
    (p) =>
      p.name?.toLocaleLowerCase().includes(filter.toLocaleLowerCase()) ||
      p.groupName?.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
  );
};
