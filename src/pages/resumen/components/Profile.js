import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  Typography,
  Stack,
  LinearProgress,
  linearProgressClasses,
  Divider,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Opacity as OpacityIcon,
} from "@mui/icons-material";
import { totalSkillPoints, totalSkills } from "../../../utils/skills";
import {
  getCurrentAge,
  getCurrentExperience,
  getPercentOfCurrentYear,
} from "../../../utils";
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

  const currAge = getCurrentAge();
  const currAgeExp = getCurrentExperience();
  const currExp = getPercentOfCurrentYear();

  return (
    <Box
      display={"flex"}
      flexDirection={["column", "row"]}
      alignItems={"center"}
      border={"1px solid white"}
      bgcolor={"black"}
    >
      <Box
        component={"img"}
        width={250}
        height={250}
        src="https://avatars.githubusercontent.com/u/19026389?v=4"
        alt="alvaro-pic"
        m={2}
      />
      <Divider
        flexItem
        sx={{
          border: "1px solid white",
        }}
      />
      <Container
        maxWidth="lx"
        sx={{
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Alvaro Martin Caballero</Typography>
          <Typography>
            {t("level")}: {currAge}
          </Typography>
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
          <Typography>
            {t("classLevel")}: {currAgeExp}
          </Typography>
        </Box>

        <Divider
          flexItem
          sx={{
            my: 2,
            border: "1px solid white",
          }}
        />

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
              value={currExp}
              sx={{ width: "100%", ml: 1 }}
            />
          </Box>
        </Stack>

        <Divider
          flexItem
          sx={{
            my: 2,
            border: "1px solid white",
          }}
        />
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>
            {t("totalSkills")}: {totalSkills}{" "}
          </Typography>
          <Typography>{t("guild")}: LHC </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Profile;
