import React from "react";
import Head from "next/head";
// import Image from "next/image";
import Feed from "../components/feed";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Mini blog</title>
      </Head>
      <Feed posts={posts} />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();
  return {
    props: {
      posts: posts.slice(0, 10),
    },
  };
}
