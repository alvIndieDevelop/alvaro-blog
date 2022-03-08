import React from "react";
import {
  Typography,
  Box,
  Container,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import Markdown from "../components/Markdown";
import { usePosts } from "../hooks";
import { readableDate } from "../utils";

const Blog = () => {
  const [posts, isLoading] = usePosts();

  const renderPost = () => {
    if (isLoading) return <div>Is loading...</div>;

    return posts.map((post) => {
      console.log(post.fields.featureImage);

      return (
        <Card>
          <CardMedia
            component="img"
            src={post.fields.featureImage.fields.file.url}
            alt={post.fields.title}
          />
          <CardContent>
            <Typography variant="h4">{post.fields.title}</Typography>
            <Markdown>{post.fields.description}</Markdown>
            <Typography>{readableDate(post.fields.date)}</Typography>
          </CardContent>
          <CardActions>
            <Button>Leer Mas</Button>
          </CardActions>
        </Card>
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
