import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Chip,
  Container,
  Typography,
  Stack,
  LinearProgress,
  linearProgressClasses,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Opacity as OpacityIcon,
} from "@mui/icons-material";
import { totalSkillPoints, totalSkills } from "../utils/skills";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        p: 3,
        backgroundColor: (theme) => theme.palette.grey[800],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: (theme) => `0px 0px 10px rgba(255,255,255,0.7)`,
        borderRadius: 1,
      }}
    >
      <Chip label={t("character")} />
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
      <Container maxWidth="md">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Alvaro Martin Caballero</Typography>
          <Typography>{t("level")}: 29</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>
            {t("class")}: {t("programmer")}
          </Typography>
          <Typography>{t("classLevel")}: 4</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>{t("skillPoints")}: 0</Typography>
          <Typography>
            {t("points")}: {totalSkillPoints}
          </Typography>
        </Box>
        <Typography>
          {t("totalSkills")}: {totalSkills}{" "}
        </Typography>
        <Stack spacing={1}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <FavoriteIcon color="secondary" />
            <LinearProgress
              variant="determinate"
              value={100}
              color="secondary"
              sx={{
                width: "100%",
                height: 10,
                ml: 1,
              }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <OpacityIcon color="primary" />
            <LinearProgress
              variant="determinate"
              value={100}
              sx={{ width: "100%", height: 10, ml: 1 }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography>EXP</Typography>
            <BorderLinearProgress
              variant="determinate"
              value={75}
              sx={{ width: "100%", ml: 1 }}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Profile;
