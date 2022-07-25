import React from "react";
import { Stack } from "@mui/material";
import Section from "./section";

export default function Feed({ posts }) {
  return (
    <Stack spacing={3}>
      <Section title="News" posts={posts} />
    </Stack>
  );
}
