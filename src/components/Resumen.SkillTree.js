import React from "react";
import { Box } from "@mui/material";
import TreeSet from "./Resumen.TreeSet";

import skillsConfig from "../utils/skills";

const SkillTree = () => {
  return (
    <Box
      sx={{
        maxHeight: 450,
        overflowY: "scroll",
      }}
    >
      {skillsConfig.map((skillSet) => (
        <TreeSet
          title={skillSet.set}
          skills={skillSet.skills}
          average={skillSet.average}
        />
      ))}
    </Box>
  );
};

export default SkillTree;
