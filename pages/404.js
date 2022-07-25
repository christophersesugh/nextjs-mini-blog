import React from "react";
import { Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Paper
      sx={{
        margin: "12px",
        background: "inherit",
        display: "grid",
        placeItems: "center",
        textTransform: "capitalize",
      }}
    >
      <Typography component="h1" variant="h2">
        404
      </Typography>{" "}
      <Typography component="h2" variant="h3">
        page not found
      </Typography>
      <Link href="/">
        <Button variant="outlined">back home</Button>
      </Link>
    </Paper>
  );
}
