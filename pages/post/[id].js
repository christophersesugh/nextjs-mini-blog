import React from "react";
import { Badge, Button, Paper, Typography } from "@mui/material";
import Link from "next/link";

export default function Post(post) {
  return (
    <Paper
      sx={{
        margin: "12px",
        display: "grid",
        placeItems: "center",
        textTransform: "capitalize",
        minHeight: "80vh",
        padding: 4,
      }}
    >
      <Badge>
        <Typography variant="h5">{post.id}</Typography>
      </Badge>
      <Typography component="h1" variant="h2">
        {post.title}
      </Typography>{" "}
      <Typography component="h6" variant="h6">
        {post.body}
      </Typography>
      <Link href="/">
        <Button variant="outlined">back to posts</Button>
      </Link>
    </Paper>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();

  const paths = posts.map((post) => {
    return {
      params: { id: `${post.id}` },
    };
  });
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return { props: post };
}
