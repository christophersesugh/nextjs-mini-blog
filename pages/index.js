import Head from "next/head";
import Image from "next/image";
import Feed from "../components/feed";

export default function Home({ posts }) {
  const filteredPosts = posts.filter((post) => post.id < Number(11));
  return <Feed posts={filteredPosts} />;
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const posts = await res.json();
  return {
    props: { posts },
  };
}
