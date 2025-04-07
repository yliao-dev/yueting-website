import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";
import BlogAuthor from "../components/blog/BlogAuthor";
import { Instagram } from "@mui/icons-material";
import { BlogData } from "../data/blog/blogData";
import PageNotFound from "./PageNotFound";

const PostPage = () => {
  const { id } = useParams();
  const post = BlogData.find((p) => String(p.id) === id);

  const [_, setMeta] = useState<any>({});
  const [markdown, setMarkdown] = useState("");
  if (!post) return <PageNotFound />;

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const posts = import.meta.glob("/src/data/blog/*.md", {
          query: "?raw",
          import: "default",
        });

        const loader = posts[post.mdPath];
        if (!loader) throw new Error(`Post not found: ${post.mdPath}`);

        const raw = await loader();
        const parsed = fm(raw as string);
        setMeta(parsed.attributes);
        setMarkdown(parsed.body);
      } catch (err) {
        console.error("❌ Failed to load post:", err);
        return <PageNotFound />;
      }
    };

    loadMarkdown();
  }, [id]);

  return (
    <div className="post__page">
      <section className="post__page__intro">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div className="post__page__media">
          <BlogAuthor author={post.author} date={post.date} />
          <a
            href="https://www.instagram.com/_yuetingl/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="instagram-icon" />
          </a>
        </div>
        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} className="post__cover" />
        )}
      </section>
      <section>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>
    </div>
  );
};

export default PostPage;
