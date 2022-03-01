import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";

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
          <Button color="inherit" component={RouterLink} to="/">
            {t("home")}
          </Button>
          <Button color="inherit" component={RouterLink} to="/resumen">
            {t("resume")}
          </Button>
          <Button color="inherit" component={RouterLink} to="/login">
            {t("login")}
          </Button>
          <Button color="inherit" component={RouterLink} to="/register">
            {t("signUp")}
          </Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default MainMenu;
