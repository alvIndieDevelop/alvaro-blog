import React from "react";
import { Box, Typography } from "@mui/material";

import itemConfig from "../../../utils/items";

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

export default ItemsSet;
