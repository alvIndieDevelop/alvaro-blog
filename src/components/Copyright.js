import React from "react";
import { Typography, Link } from "@mui/material";

const Copyright = () => {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="#">
        alvaroblog
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
