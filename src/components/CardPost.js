import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import Markdown from "./Markdown";

const CardPost = (props) => {
  const { title, image, description, date, slug } = props;
  return (
    <Card>
      <CardMedia component="img" src={image} alt={title} />
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Typography>{date}</Typography>
        <Markdown>{description}</Markdown>
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
