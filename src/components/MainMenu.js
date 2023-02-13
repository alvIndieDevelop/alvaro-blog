import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  ButtonGroup,
  Box,
} from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";
import Footer from "./Footer";

import { useTranslation } from "react-i18next";

const MainMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alvaro blog
          </Typography>
          <ButtonGroup variant="outlined">
            <Button color="inherit" component={RouterLink} to="/">
              {t("home")}
            </Button>
            <Button color="inherit" component={RouterLink} to="/resumen">
              {t("resume")}
            </Button>
            <Button color="inherit" component={RouterLink} to="/blog">
              {t("blog")}
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <Box>
        <Outlet />
      </Box>
      <Footer />
    </>
  );
};

export default MainMenu;
