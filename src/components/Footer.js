import React from "react";
import {
  Box,
  Container,
  ButtonGroup,
  IconButton,
  Typography,
} from "@mui/material";
import {
  GitHub as GithubIcon,
  LinkedIn as LinkedInIcon,
  Twitter as TwitterIcon,
  Instagram as InstagramIcon,
} from "@mui/icons-material";

import Copyright from "./Copyright";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        pt: 9,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: "50%",
          transform: "translate(50%, 0)",
          mx: "auto",
          zIndex: -1,

          height: 2000,
          width: 2000,
          borderRadius: "50%",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[900],
        }}
      />
      <Container maxWidth="sm">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="body1">alvindiedevelop@gmail.com</Typography>
          <ButtonGroup
            sx={{
              pt: 3,
              pb: 7,
            }}
          >
            <IconButton>
              <GithubIcon />
            </IconButton>
            <IconButton>
              <LinkedInIcon />
            </IconButton>
            <IconButton>
              <InstagramIcon />
            </IconButton>
            <IconButton>
              <TwitterIcon />
            </IconButton>
          </ButtonGroup>
          <Copyright />
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
