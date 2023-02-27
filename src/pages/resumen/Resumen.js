import React from "react";
import { Grid, Box, Tabs, Tab } from "@mui/material";

// firebase
import { logEvent } from "firebase/analytics";
import { analytics } from "../../config/firebase";

// components
import Profile from "./components/Profile";
import TabPanel from "../../components/TapPanel";
import ItemsSet from "./components/ItemsSet";

import { Skills } from "../../modules";

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Resumen = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    logEvent(analytics, "resumenpage_visited");
  }, []);

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Profile />
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="Character menu"
              >
                <Tab label="Skills" {...a11yProps(0)} />
                <Tab label="Items" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Skills />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <ItemsSet />
            </TabPanel>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Resumen;
