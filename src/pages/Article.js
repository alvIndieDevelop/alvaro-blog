import React from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Container, Divider } from "@mui/material";

// firebase
import { logEvent } from "firebase/analytics";
import { analytics } from "../config/firebase";

import { useSinglePost } from "../hooks";
import Markdown from "react-markdown";

const Article = () => {
  const { id } = useParams();
  const [article, isLoading] = useSinglePost(id);

  const renderPost = () => {
    if (isLoading) return <div>Loading...</div>;

    return (
      <Container maxWidth="md">
        <Typography variant="h4" fontWeight={"bold"} align="center">
          {article.title}
        </Typography>
        <Divider />
        <Box
          component={"img"}
          src={article.thumbnail}
          alt={article.title}
          width="100%"
          my={2}
        />
        <Box>
          <Typography variant="h6">{article.author}</Typography>
          <Typography variant="caption">{article.date}</Typography>
          <Divider />
          <Markdown>{article.content}</Markdown>
        </Box>
      </Container>
    );
  };

  React.useEffect(() => {
    logEvent(analytics, `article_${id}_page_visited`);
  }, [id]);

  return <Box my={10}>{renderPost()}</Box>;
};

export default Article;
