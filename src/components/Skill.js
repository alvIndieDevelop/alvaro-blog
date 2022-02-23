import React from "react";
import { Typography, Box, Divider } from "@mui/material";

const Skill = ({ name }) => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.grey[500],
        width: 50,
        height: 50,
        m: 2,
      }}
    >
      <Typography>{name}</Typography>
    </Box>
  );
};

export default Skill;
