import React from "react";
import { AppBar, Toolbar } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      component="nav"
      sx={{ background: "#f1f1f1", color: "#000" }}
    >
      <Toolbar>
        <h2>SSG and SSR</h2>
      </Toolbar>
    </AppBar>
  );
}
