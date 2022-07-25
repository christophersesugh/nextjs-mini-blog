import React from "react";
import { AppBar, Toolbar } from "@mui/material";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <AppBar
      position="static"
      component="footer"
      sx={{ background: "#f1f1f1", color: "#000" }}
    >
      <Toolbar>
        <h2>&copy; SSG and SSR {year}</h2>
      </Toolbar>
    </AppBar>
  );
}
