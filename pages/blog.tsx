import Layout from "@components/layout";
import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";

export default function Blog() {
  return (
    <Layout title="Blog" seoTitle="Blog">
      <h1 className="font-semibold text-lg">Latest Posts:</h1>
      <ul>
        <li>welcome everyone!</li>
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  readdirSync("./posts").forEach((file) => {
    const content = readFileSync(`./posts/${file}`, "utf-8");
    console.log(matter(content));
  });
  return {
    props: {},
  };
}
