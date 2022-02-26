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
  Chip,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Favorite as FavoriteIcon,
  Opacity as OpacityIcon,
} from "@mui/icons-material";
import SkillTree from "../components/Resumen.SkillTree";

import { totalSkillPoints, totalSkills } from "../utils/skills";
import itemConfig from "../utils/items";

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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Profile = () => {
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
      <Chip label="Character" />
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
          <Typography>Level: 29</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Class: Programmer</Typography>
          <Typography>Class Level: 4</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography>Skill points: 0</Typography>
          <Typography>Points: {totalSkillPoints}</Typography>
        </Box>
        <Typography>total Skills: {totalSkills} </Typography>
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

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ItemsSet = () => {
  return (
    <Box>
      {itemConfig.map((item) => (
        <Box
          sx={{
            border: `1px solid #fff`,
            p: 2,
            m: 1,
            borderRadius: 1.5,
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              display: "flex",
            }}
          >
            <Box
              sx={{
                m: 1,
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                justifyItems: "center",
              }}
            >
              <img src={item.icon} alt={item.name} />
            </Box>
            <Box
              sx={{
                p: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Typography>{item.name}</Typography>
              <Typography>{item.description}</Typography>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

const Resumen = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Profile />
        </Grid>
        <Grid item xs={12} md={8}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Skills" {...a11yProps(0)} />
                <Tab label="Items" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <SkillTree />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ItemsSet />
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resumen;
