import React from "react";
import { Box, Divider, Grid, Chip, Typography } from "@mui/material";

import Skill from "./Skill";

const TreeSet = ({ title, skills, average }) => {
  return (
    <Box>
      <Divider>
        <Chip label={title} />
      </Divider>
      <Grid container>
        <Grid item xs={12} align="center">
          <Box
            sx={{
              mt: 2,
            }}
          >
            <Typography>Average</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(255,255,255,0.8)",
                width: 60,
                height: 60,
                borderRadius: "50%",
                border: (theme) => `5px solid ${theme.palette.primary.main}`,
              }}
            >
              <Typography variant="subtitle2" color="black" align="center">
                {average}
              </Typography>
            </Box>
          </Box>
        </Grid>
        {skills.map((skill) => (
          <Grid
            item
            xs={4}
            align="center"
            sx={{ position: "relative", overflow: "hidden" }}
          >
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
            <Skill name={skill.name} point={skill.point} icon={skill.icon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default TreeSet;
