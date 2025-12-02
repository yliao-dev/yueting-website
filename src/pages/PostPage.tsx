import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";
import ThoughtsAuthor from "../components/thoughts/ThoughtsAuthor";
import { ThoughtsData } from "../data/thoughts/thoughtsData";
import PageNotFound from "./NotFoundPage";
import LineBreak from "../components/shared/LineBreak";
import NavigationArrows from "../components/shared/NavigationArrows";
import { PostMeta } from "../types/thoughtsTypes";
import TranslateIcon from "@mui/icons-material/Translate";

const PostPage = () => {
  const { id } = useParams();
  const index = ThoughtsData.findIndex((p) => String(p.id) === id);
  const post = ThoughtsData[index];

  const [lang, setLang] = useState<"en" | "cn">("en");

  const [markdown, setMarkdown] = useState("");
  const [, setMeta] = useState<PostMeta | null>(null);

  useEffect(() => {
    if (!post) return;

    const loadMarkdown = async () => {
      try {
        const posts = import.meta.glob("/src/data/thoughts/*.md", {
          query: "?raw",
          import: "default",
        });

        const path = lang === "en" ? post.mdPath : post.mdPath2 ?? post.mdPath;
        const loader = posts[path];
        if (!loader) throw new Error(`Post not found: ${path}`);

        const raw = await loader();
        const parsed = fm(raw as string);
        setMeta(parsed.attributes as PostMeta);
        setMarkdown(parsed.body);
      } catch (err) {
        console.error("❌ Failed to load post:", err);
      }
    };

    loadMarkdown();
  }, [post, lang]);

  if (!post) return <PageNotFound />;

  return (
    <div className="post__page">
      <section className="post__page__intro">
        <h1>{post.title}</h1>
        <p>{post.description}</p>

        <div className="post__page__info">
          <button
            className="lang-toggle"
            onClick={() => setLang(lang === "en" ? "cn" : "en")}
          >
            <TranslateIcon fontSize="small" />
            {lang === "en" ? "| 中文" : "| EN"}
          </button>

          <div className="post__page__media">
            <ThoughtsAuthor author={post.author} date={post.date} />
          </div>
        </div>
        {post.coverImage && (
          <img src={post.coverImage} alt={post.title} className="post__cover" />
        )}
      </section>

      <section className="post__text">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </section>

      <LineBreak variant="gradient" />

      <section className="post__navigation">
        <NavigationArrows
          prev={
            index > 0
              ? {
                  label: "Prev Post",
                  to: `/thoughts/post/${ThoughtsData[index - 1].id}`,
                }
              : undefined
          }
          next={
            index < ThoughtsData.length - 1
              ? {
                  label: "Next Post",
                  to: `/thoughts/post/${ThoughtsData[index + 1].id}`,
                }
              : undefined
          }
        />
      </section>
    </div>
  );
};

export default PostPage;
