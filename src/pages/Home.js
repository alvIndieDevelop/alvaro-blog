import React from "react";
// mui
import { Typography, Box } from "@mui/material";
import ParticlesBg from "particles-bg";

// components
import HomeHeader from "../components/Home.Header";
import Footer from "../components/Footer";

const Home = () => {
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
          <Typography textAlign="center">
            Sit adipisci soluta. Sint qui cum placeat excepturi quo sunt
            mollitia accusamus. Aut similique qui commodi minima non qui.
            Corrupti cumque velit veritatis aliquam voluptatem ullam quia id
            vel.
            <br />
            Quis laborum ut neque. Vel soluta incidunt molestias quasi enim.
            Ratione aut quis voluptatem. Assumenda corrupti voluptatum.
            Voluptatum non quasi. Deserunt nesciunt officia qui repudiandae
            consectetur modi.
            <br />
            Ducimus vero recusandae magnam maxime nam eligendi sequi soluta.
            Odit incidunt ullam. Laborum rerum quos officiis sit nostrum. Quas
            nihil et commodi fugit necessitatibus non. Vel quam eveniet ut iure
            dolore sit distinctio voluptates. Fuga voluptatum enim ea magnam
            officiis quo. Reiciendis sint est. Doloremque nesciunt impedit
            reiciendis totam sint vitae quia repellendus non. Sed laborum a. Aut
            minima eligendi magni.
          </Typography>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Home;
