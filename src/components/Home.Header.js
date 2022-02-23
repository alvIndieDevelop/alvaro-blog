import React from "react";
import { Box, Typography } from "@mui/material";

const HomeHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        p: 5,
        height: 500,
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontWeight: "bold",
        }}
      >
        Alvaro Martin Caballero
      </Typography>
      <Box
        sx={{
          width: 250,
          height: 250,
          m: 3,
          overflow: "hidden",
          borderRadius: "50%",
          border: "1px solid #000",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/19026389?v=4"
          width={250}
          alt="alvaro-pic"
        />
      </Box>
    </Box>
  );
};

export default HomeHeader;
