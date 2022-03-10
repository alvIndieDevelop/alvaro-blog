import React from "react";
import { Box, Grid } from "@mui/material";
import { usePosts } from "../hooks";
import { readableDate } from "../utils";
import CardPost from "../components/CardPost";

const Blog = () => {
  const [posts, isLoading] = usePosts();

  const renderPost = () => {
    if (isLoading) return <div>Is loading...</div>;

    return posts.map((post) => {
      return (
        <Grid item xs={12} md={4}>
          <CardPost
            title={post.fields.title}
            image={post.fields.featureImage.fields.file.url}
            description={post.fields.description}
            date={readableDate(post.fields.date)}
            slug={post.fields.slug}
          />
        </Grid>
      );
    });
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Grid container>{renderPost()}</Grid>
    </Box>
  );
};

export default Blog;
