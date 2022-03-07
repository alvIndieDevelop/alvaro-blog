import React, { useEffect, useState } from "react";
import { Typography, Grid, Divider, Box, Container } from "@mui/material";
import Markdown from "../components/Markdown";

import post1 from "../content/blog01.md";
import post2 from "../content/blog02.md";

import { fileToMarkDown } from "../utils";

const Blog = () => {
  const [md, setmd] = useState("");

  const getFile = async () => {
    const res = await fileToMarkDown(post2);
    setmd(res);
  };

  useEffect(() => {
    getFile();
  }, []);
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          p: 3,
        }}
      >
        <Markdown>{md}</Markdown>
      </Box>
    </Container>
  );
};

export default Blog;
