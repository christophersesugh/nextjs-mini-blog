import React from "react";
import { CircularProgress } from "@mui/material";

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
