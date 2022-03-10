import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { Ipostcard } from "../../utils/interfaces";
import { NotLoaded } from "../Error/NotLoaded";
import { NoResults } from "./NoResults";
import PostCard from "./PostCard";
import { PostFilter } from "./PostFilter";
import { styles } from "./style";
import { searchPostsToRender } from "./utils/common";

export const PostContainer: React.FC = () => {
  const [filter, setFilter] = useState<string>("");
  const [postsToRender, SetPostsToRender] = useState<Ipostcard[]>();

  const { data: posts, err } = useHttp("http://localhost:4000/posts");

  useEffect(() => {
    const filteredPosts = searchPostsToRender(posts, filter);
    SetPostsToRender(filteredPosts);
  }, [filter, posts]);

  return (
    <Box sx={styles.box}>
      <Box position="relative">
        <PostFilter setFilter={setFilter} />
      </Box>

      {postsToRender &&
        postsToRender.length > 0 &&
        postsToRender.map((p, i) => <PostCard key={i} post={p} />)}

      {postsToRender?.length === 0 && <NoResults />}
      {err && <NotLoaded />}
    </Box>
  );
};
