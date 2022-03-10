import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container } from "@mui/material";
import { useSinglePost } from "../hooks";
import { readableDate } from "../utils";
import Markdown from "../components/Markdown";

const Article = () => {
  const { id } = useParams();
  const [post, isLoading] = useSinglePost(id);

  console.log(post);

  const renderPost = () => {
    if (isLoading) return <div>Loading...</div>;

    return (
      <Container maxWidth="md">
        <Typography variant="h4" align="center">
          {post.title}
        </Typography>
        <Typography align="center">{readableDate(post.date)}</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={post.featureImage.fields.file.url}
            alt={post.title}
            width={900}
          />
        </Box>
        <Box
          sx={{
            pt: 3,
          }}
        >
          <Markdown>{post.content}</Markdown>
        </Box>
      </Container>
    );
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      {renderPost()}
    </Box>
  );
};

export default Article;
