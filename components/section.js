import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

const posts = [
  {
    name: "some post",
  },
  {
    name: "another post",
  },
  {
    name: "last post",
  },
];

export default function Section({ title = "" }) {
  return (
    <Paper elevation={1}>
      <Typography>{title}</Typography>
      <Grid container>
        {posts.map((post) => {
          return (
            <Grid item>
              <h1>{post.name}</h1>
            </Grid>
          );
        })}
      </Grid>
    </Paper>
  );
}
