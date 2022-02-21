import React from "react";
// mui
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import ParticlesBg from "particles-bg";

const Home = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Alvaro blog
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
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
        <ParticlesBg
          type="cobweb"
          bg={{
            position: "absolute",
            zIndex: -1,
            width: "100%",
          }}
        />
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
            m: 3,
            overflow: "hidden",
            borderRadius: "50%",
            border: "1px solid #000",
          }}
        >
          <img
            src="https://avatars.githubusercontent.com/u/19026389?v=4"
            alt="alvaro-pic"
          />
        </Box>
      </Box>
      <Box
        sx={{
          p: 3,
          maxWidth: 500,
        }}
      >
        <Typography textAlign="center">
          Sit adipisci soluta. Sint qui cum placeat excepturi quo sunt mollitia
          accusamus. Aut similique qui commodi minima non qui. Corrupti cumque
          velit veritatis aliquam voluptatem ullam quia id vel.
          <br />
          Quis laborum ut neque. Vel soluta incidunt molestias quasi enim.
          Ratione aut quis voluptatem. Assumenda corrupti voluptatum. Voluptatum
          non quasi. Deserunt nesciunt officia qui repudiandae consectetur modi.
          <br />
          Ducimus vero recusandae magnam maxime nam eligendi sequi soluta. Odit
          incidunt ullam. Laborum rerum quos officiis sit nostrum. Quas nihil et
          commodi fugit necessitatibus non. Vel quam eveniet ut iure dolore sit
          distinctio voluptates. Fuga voluptatum enim ea magnam officiis quo.
          Reiciendis sint est. Doloremque nesciunt impedit reiciendis totam sint
          vitae quia repellendus non. Sed laborum a. Aut minima eligendi magni.
        </Typography>
      </Box>
      <div>content</div>
    </div>
  );
};

export default Home;
