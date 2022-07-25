import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function Post({ post }) {
  console.log(post);
  return (
    <Grid item md={6} justifyContent="center" alignItems="center">
      <Link href="post/[id]" as={`/post/${post.id}`} passHref>
        <Paper
          elevation={3}
          sx={{
            border: "1px solid #000",
            borderRadius: 5,
            padding: 4,
            margin: 2,
            cursor: "pointer",
          }}
        >
          <Stack spacing={3}>
            <Typography component="h5" variant="h5">
              <b>Title:</b>
              <br />
              {post.title.substring(0, 10)}
            </Typography>
            <Typography component="h5" variant="h5">
              <b>Body:</b>
              <br />
              {post.body.substring(0, 20)}
            </Typography>
          </Stack>
        </Paper>
      </Link>
    </Grid>
  );
}
