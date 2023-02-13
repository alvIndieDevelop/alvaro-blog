import React from "react";
import { Box, Typography } from "@mui/material";

const HomeHeader = () => {
  return (
    <Box
      display={"flex"}
      flexDirection="column"
      alignContent="center"
      justifyContent="center"
      alignItems="center"
      py={10}
      sx={{
        background: "linear-gradient(180deg, #fff 0%, #121212 100%)",
      }}
    >
      <Typography
        sx={{
          fontSize: (theme) => {
            return {
              xs: theme.typography.h2.fontSize,
              md: theme.typography.h1.fontSize,
            };
          },
        }}
        fontWeight="bold"
        align="center"
      >
        Alvaro Martin Caballero
      </Typography>
      <Box
        component="img"
        src="https://avatars.githubusercontent.com/u/19026389?v=4"
        width={300}
        alt="alvaro-pic"
        borderRadius={"50%"}
      />
    </Box>
  );
};

export default HomeHeader;
