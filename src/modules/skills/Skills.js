import { Box, Chip, Grid, Typography } from "@mui/material";
import React from "react";

import skillsConfig from "../../utils/skills";

const Skills = () => {
  return (
    <Box>
      <Box>
        {skillsConfig.map((skillset) => (
          <Box key={skillset.set}>
            <Typography fontWeight={"bold"} align="center">
              {skillset.set}
            </Typography>
            <Grid container>
              {skillset.skills.map((skill) => (
                <Grid
                  item
                  xs={12}
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
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
