import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { Container } from "@mui/material";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Container maxWidth="md">{children}</Container>
      <Footer />
    </>
  );
}
