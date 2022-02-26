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
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(255,255,255,0.8)",
          width: 60,
          height: 60,
          borderRadius: "50%",
          border: (theme) => `5px solid ${theme.palette.primary.main}`,
        }}
      >
        <img src={icon} alt={name} height={30} />
      </Box>
      <Typography>{point}/10</Typography>
    </Box>
  );
};

export default Skill;
