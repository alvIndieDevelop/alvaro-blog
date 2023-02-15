import React from "react";
import { Typography, Box } from "@mui/material";

const Skill = ({ name, point, icon }) => {
  return (
    <Box
      sx={{
        m: 2,
      }}
    >
      <Typography>{name}</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.8)",
          width: 100,
          height: 100,
          border: (theme) => `3px solid ${theme.palette.primary.main}`,
        }}
      >
        <img src={icon} alt={name} height={30} />
        <Typography>{point}/10</Typography>
      </Box>
    </Box>
  );
};

export default Skill;
