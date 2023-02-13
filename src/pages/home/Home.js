import React from "react";
// mui
import { Typography, Box, Container, Grid } from "@mui/material";
import { useTranslation } from "react-i18next";

// components
import HomeHeader from "./components/Header";

const Home = () => {
  const { t } = useTranslation();
  return (
    <>
      <HomeHeader />
      <Box py={5}>
        <Container>
          <Grid container>
            <Grid item xs={12}>
              <Box
                position={"relative"}
                mt={2}
                mb={8}
                height={300}
                borderRadius={5}
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                overflow={"hidden"}
                sx={{
                  background: `url("background/unity3D03.png")`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  boxShadow:
                    "0px 0px 40px -10px rgba(255,255,255,0.75) inset, 0px 0px 20px -5px rgba(255,255,255,0.75)",
                }}
              >
                <Typography
                  variant="h3"
                  fontWeight={"bold"}
                  sx={{
                    zIndex: 1,
                  }}
                >
                  Acerca de mi
                </Typography>
                <Box
                  position={"absolute"}
                  width={"100%"}
                  height={"100%"}
                  bgcolor={"rgba(0,0,0,.30)"}
                />
              </Box>
              <Typography>
                Como desarrollador de software apasionado, he dedicado gran
                parte de mi vida a la tecnología y su constante evolución. Mi
                área de especialización incluye el desarrollo de videojuegos y
                el desarrollo web, en la que tengo más de 4 años de experiencia
                trabajando de forma independiente.
                <br />
                <br />
                Mi pasión por la programación y mi sed de conocimiento siempre
                me han impulsado a investigar y aprender acerca de las nuevas
                tecnologías y herramientas, para aplicarlas en mis proyectos y
                garantizar una solución innovadora y eficiente para mis
                clientes. Además, soy una persona dedicada, responsable y
                comprometida con mis proyectos, lo que me permite brindar un
                servicio de alta calidad y cumplir con los plazos establecidos.
                <br />
                <br />
                En el desarrollo de videojuegos, he participado en el diseño y
                la implementación de diversos juegos, desde juegos simples hasta
                juegos complejos con gráficos y efectos especiales. Además, me
                aseguro de utilizar las últimas tecnologías y tendencias en el
                mercado para ofrecer una experiencia de juego atractiva y
                enriquecedora para los jugadores.
                <br />
                <br />
                En el desarrollo web, he trabajado en una amplia variedad de
                proyectos, desde pequeños sitios web hasta aplicaciones web
                complejas. Me enfoco en utilizar tecnologías y herramientas
                modernas para garantizar una experiencia de usuario atractiva y
                eficiente, así como en seguir los estándares de desarrollo web
                para garantizar la accesibilidad y el rendimiento de los sitios
                web.
                <br />
                <br />
                En resumen, mi objetivo es aplicar mis habilidades y
                conocimientos en una organización, empresa o persona que quiera
                innovar y llevar sus proyectos a un nivel superior. Estoy
                dispuesto a trabajar duro y aprender constantemente para lograr
                mis objetivos y brindar un excelente servicio a mis clientes.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Home;
