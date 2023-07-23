import Link from "next/link";
import { client } from "@/libs/client";
import styles from "@/styles/Home.module.scss";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.postsHeader}>Posts</h2>
      <ul>
        {blog.map((blog) => (
          <li key={blog.id}>
            <div>
              <span
                suppressHydrationWarning
                style={{
                  fontSize: "3px",
                  padding: "5px",
                  backgroundColor: "#F0F0F0",
                  borderRadius: "5px",
                }}
              >
                {new Date(blog.publishedAt).toLocaleDateString()}
              </span>
              &emsp; {/* 全角スペース */}
              <Link href={`blog/${blog.id}`} legacyBehavior>
                <a className={styles.link}>{blog.title}</a>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
