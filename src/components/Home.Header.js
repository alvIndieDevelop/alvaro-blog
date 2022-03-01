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
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: (theme) => {
            return {
              xs: theme.typography.h2.fontSize,
              md: theme.typography.h1.fontSize,
            };
          },
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
