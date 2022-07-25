import React from "react";
import { Stack } from "@mui/material";
import Section from "./section";

export default function Feed() {
  return (
    <Stack spacing={3}>
      <Section title="Science" />
      <Section title="Technology" />
      <Section title="Art" />
    </Stack>
  );
}
