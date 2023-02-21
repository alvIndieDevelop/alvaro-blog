import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";

import skillsConfig from "../../utils/skills";

const Skills = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        {skillsConfig.map((skillset) => (
          <Grid item xs={12} md={6} key={skillset.set}>
            <Typography variant="h5" fontWeight={"bold"} align="center">
              {skillset.set}
            </Typography>
            <Divider
              flexItem
              sx={{
                mb: 2,
              }}
            />
            <Grid container>
              {skillset.skills.map((skill) => (
                <Grid
                  item
                  xs={6}
                  md={2}
                  key={skill.name}
                  alignContent={"center"}
                >
                  <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Typography mb={2} align={"center"} fontWeight={"bold"}>
                      {skill.name}
                    </Typography>
                    <Box
                      display="flex"
                      flexDirection={"column"}
                      justifyContent={"center"}
                      alignItems={"center"}
                      width={100}
                      height={100}
                      bgcolor="rgba(255,255,255,0.3)"
                      border={"1px solid"}
                    >
                      <Box>
                        <img src={skill.icon} alt={skill.name} height={30} />
                      </Box>
                      <Typography>{skill.point}/10</Typography>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Skills;
