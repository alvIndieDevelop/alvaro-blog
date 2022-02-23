import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link as RouterLink, Outlet } from "react-router-dom";

const MainMenu = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alvaro blog
          </Typography>
          <Button color="inherit" component={RouterLink} to="/">
            Home
          </Button>
          <Button color="inherit" component={RouterLink} to="/resumen">
            Resumen
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
};

export default MainMenu;
