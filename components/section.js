import React from "react";
import { Grid, Paper, Stack, Typography } from "@mui/material";
import Post from "./post";

// const posts = [
//   {
//     name: "some post",
//   },
//   {
//     name: "another post",
//   },
//   {
//     name: "last post",
//   },
// ];

export default function Section({ title = "News", posts }) {
  return (
    <Paper
      elevation={1}
      sx={{
        padding: "16px",
        borderRadius: 5,
        display: "grid",
        placeItems: "center",
        margin: 4,
      }}
    >
      <Typography component="h2" variant="h4" sx={{ margin: "8px" }}>
        {title}
      </Typography>
      <Grid container justifyContent="center">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </Grid>
    </Paper>
  );
}
