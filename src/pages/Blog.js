import React from "react";
import {
  Box,
  Typography,
  Grid,
  Container,
  Button,
  Card,
  CardMedia,
  CardActions,
  CardContent,
} from "@mui/material";
import ReactMarkdown from "react-markdown";
import postList from "../posts.json";

const Blog = () => {
  return (
    <Box p={2}>
      <Container>
        <Grid container spacing={2}>
          {postList.map((post) => (
            <Grid item xs={12} md={6} key={post.id}>
              <Card>
                <CardMedia
                  component="img"
                  image={post.thumbnail}
                  width={"100%"}
                  height={300}
                />
                <CardContent>
                  <Typography variant="h5" fontWeight={"bold"}>
                    {post.title}
                  </Typography>
                  <div>{post.author}</div>
                  <ReactMarkdown>{`${post.content.slice(
                    0,
                    240
                  )}...`}</ReactMarkdown>
                </CardContent>
                <CardActions>
                  <Button>Leer mas</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Blog;
