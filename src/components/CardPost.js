import React from "react";
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
  const { title, image, description, date } = props;
  return (
    <Card>
      <CardMedia component="img" src={image} alt={title} />
      <CardContent>
        <Typography variant="h4">{title}</Typography>
        <Markdown>{description}</Markdown>
        <Typography>{date}</Typography>
      </CardContent>
      <CardActions>
        <Button>Leer Mas</Button>
      </CardActions>
    </Card>
  );
};

export default CardPost;
