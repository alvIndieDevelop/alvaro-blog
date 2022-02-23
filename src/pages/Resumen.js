import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Box,
  Typography,
  LinearProgress,
  linearProgressClasses,
  Container,
  Stack,
  Divider,
  Chip,
} from "@mui/material";
import Skill from "../components/Skill";

const basicSkills = [
  "HTML & CSS",
  "Python",
  "C#",
  "C++",
  "Javascript",
  "Typescript",
  "Bash",
];

const mobileDevelopment = ["ReactNative"];
const desktopDevelopment = ["ElectronJS"];
const frontendDevelopment = ["ReactJS", "NextJS"];
const backendDevelopment = ["Flask", "ExpressJS", "StrapiJS"];
const devOps = ["Linux", "Git", "Digital Ocean", "Heroku", "Firebase"];
const gameDevelopment = ["Unity3D", "Unreal Engine", "Godot", "Blender"];

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 900],
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: "gold",
  },
}));

const Profile = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.grey[800],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Divider>
        <Chip label="Character" />
      </Divider>
      <Box
        sx={{
          width: 250,
          height: 250,
          m: 3,
          overflow: "hidden",
          borderRadius: "50%",
          border: "1px solid #000",
        }}
      >
        <img
          src="https://avatars.githubusercontent.com/u/19026389?v=4"
          width={250}
          alt="alvaro-pic"
        />
      </Box>
      <Box>
        <Typography>Name: Alvaro Martin Caballero</Typography>
        <Typography>Class: Programmer</Typography>
        <Typography>Level: 29</Typography>
        <Typography>Class Level: 4</Typography>
      </Box>
      <Container maxWidth="md">
        <Stack spacing={1}>
          <LinearProgress
            variant="determinate"
            value={100}
            color="secondary"
            sx={{
              height: 10,
            }}
          />
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{
              height: 10,
            }}
          />
          <BorderLinearProgress variant="determinate" value={75} />
        </Stack>
      </Container>
    </Box>
  );
};

const TreeSet = ({ title, skills }) => {
  return (
    <Box>
      <Divider>
        <Chip label={title} />
      </Divider>
      <Grid container>
        {skills.map((skill) => (
          <Grid item xs={4} align="center" sx={{ position: "relative" }}>
            <Divider
              sx={{
                position: "absolute",
                bottom: "50%",
                width: "100%",
                zIndex: -1,
              }}
            />
            <Divider
              orientation="vertical"
              sx={{
                position: "absolute",
                right: "50%",
                height: "100%",
                zIndex: -1,
              }}
            />
            <Skill name={skill} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SkillTree = () => {
  return (
    <Box
      sx={{
        //backgroundColor: (theme) => theme.palette.grey[800],
        maxHeight: 400,
        overflowY: "scroll",
      }}
    >
      <TreeSet title="Basic" skills={basicSkills} />
      <TreeSet title="Frontend development" skills={frontendDevelopment} />
      <TreeSet title="Backend development" skills={backendDevelopment} />
      <TreeSet title="Desktop development" skills={desktopDevelopment} />
      <TreeSet title="Mobile development" skills={mobileDevelopment} />
      <TreeSet title="Game development" skills={gameDevelopment} />
      <TreeSet title="DevOps" skills={devOps} />
    </Box>
  );
};

const Resumen = () => {
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Profile />
        </Grid>
        <Grid item xs={8}>
          <SkillTree />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resumen;
