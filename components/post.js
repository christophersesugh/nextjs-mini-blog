import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";

export default function Post({ name = "" }) {
  return (
    <Link href="post/[id]" as={`/posts/post.id`} passHref>
      <Grid item md={4} justifyContent="center" alignItems="center">
        {name}
      </Grid>
    </Link>
  );
}
