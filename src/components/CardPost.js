import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from "@mui/material";
import Markdown from "./Markdown";

const CardPost = (props) => {
  const { title, image, author, description, date, slug } = props;
  return (
    <Card>
      <CardMedia
        component="img"
        image={image}
        alt={title}
        width={"100%"}
        height={"100%"}
      />
      <CardContent>
        <Typography variant="h5" fontWeight={"bold"}>
          {title}
        </Typography>
        <Typography>{author}</Typography>
        <Typography variant="caption">{date}</Typography>
        <Divider
          sx={{
            my: 2,
          }}
        />
        <Box>
          <Markdown>{description}</Markdown>
        </Box>
      </CardContent>
      <CardActions>
        <Button component={RouterLink} to={`/blog/${slug}`}>
          Leer Mas
        </Button>
      </CardActions>
    </Card>
  );
};

export default CardPost;
