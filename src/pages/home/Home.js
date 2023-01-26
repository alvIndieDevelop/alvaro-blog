import React from "react";
// mui
import { Typography, Box } from "@mui/material";
import ParticlesBg from "particles-bg";

import { useTranslation } from "react-i18next";

// components
import HomeHeader from "../../components/Home.Header";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <ParticlesBg type="lines" bg={true} />
      <HomeHeader />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#121212",
        }}
      >
        <Box
          sx={{
            maxWidth: 500,
            p: 5,
          }}
        >
          <Typography textAlign="center">{t("aboutMe")}</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Home;
