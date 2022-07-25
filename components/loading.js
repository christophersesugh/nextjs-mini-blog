import React from "react";
import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
}
