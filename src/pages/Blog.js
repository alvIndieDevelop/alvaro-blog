import React from "react";
import { Box } from "@mui/material";
import { usePosts } from "../hooks";
import { readableDate } from "../utils";
import CardPost from "../components/CardPost";

const Blog = () => {
  const [posts, isLoading] = usePosts();

  const renderPost = () => {
    if (isLoading) return <div>Is loading...</div>;

    return posts.map((post) => {
      return (
        <CardPost
          title={post.fields.title}
          image={post.fields.featureImage.fields.file.url}
          description={post.fields.description}
          date={readableDate(post.fields.date)}
        />
      );
    });
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Box>{renderPost()}</Box>
    </Box>
  );
};

export default Blog;
