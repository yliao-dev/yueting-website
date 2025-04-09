import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";
import BlogAuthor from "../components/blog/BlogAuthor";
import { BlogData } from "../data/blog/blogData";
import PageNotFound from "./PageNotFound";
import LineBreak from "../components/shared/LineBreak";
import NavigationArrows from "../components/shared/NavigationArrows";
import { PostMeta } from "../components/blog/blogTypes";

const PostPage = () => {
  const { id } = useParams();
  const index = BlogData.findIndex((p) => String(p.id) === id);
  const post = BlogData[index];

  const [markdown, setMarkdown] = useState("");
  const [, setMeta] = useState<PostMeta | null>(null); // Optional: if you use it

  useEffect(() => {
    if (!post) return;

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
        setMeta(parsed.attributes as PostMeta);
        setMarkdown(parsed.body);
      } catch (err) {
        console.error("❌ Failed to load post:", err);
      }
    };

    loadMarkdown();
  }, [post]); // ✅ directly depend on post object

  if (!post) return <PageNotFound />;

  return (
    <div className="post__page">
      <section className="post__page__intro">
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div className="post__page__media">
          <BlogAuthor author={post.author} date={post.date} />
        </div>
        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} className="post__cover" />
        )}
      </section>

      <section className="post__page__content">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>

      <LineBreak variant="gradient" />

      <section className="post__navigation">
        <NavigationArrows
          prev={
            index > 0
              ? {
                  label: "Prev Blog",
                  to: `/blog/post/${BlogData[index - 1].id}`,
                }
              : undefined
          }
          next={
            index < BlogData.length - 1
              ? {
                  label: "Next Blog",
                  to: `/blog/post/${BlogData[index + 1].id}`,
                }
              : undefined
          }
        />
      </section>
    </div>
  );
};

export default PostPage;
