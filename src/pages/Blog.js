import React from "react";
import { Box, Grid, Container } from "@mui/material";

// firebase
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";

import postList from "../posts.json";
import CardPost from "../components/CardPost";

const Blog = () => {
  React.useEffect(() => {
    logEvent(analytics, "blogpage_visited");
  }, []);
  return (
    <Box p={2}>
      <Container>
        <Grid container spacing={2}>
          {postList.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <CardPost
                title={post.title}
                image={post.thumbnail}
                author={post.author}
                description={`${post.content.slice(0, 240)}...`}
                date={post.date}
                slug={post.id}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
