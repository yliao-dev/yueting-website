import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import fm from "front-matter";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [meta, setMeta] = useState<any>({});
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const posts = import.meta.glob("/src/data/blog/*.md", {
          query: "?raw",
          import: "default",
        });

        const fileKey = `/src/data/blog/post${id}.md`;
        const loader = posts[fileKey];
        if (!loader) throw new Error(`Post not found: ${fileKey}`);

        const raw = await loader();
        const parsed = fm(raw as string);
        setMeta(parsed.attributes);
        setMarkdown(parsed.body);
      } catch (err) {
        console.error("❌ Failed to load post:", err);
        navigate("/not-found");
      }
    };

    loadMarkdown();
  }, [id]);

  return (
    <div className="post__page">
      <h1>{meta.title}</h1>
      <p>{meta.date}</p>
      {meta.cover && (
        <img src={meta.cover} alt={meta.title} className="post__cover" />
      )}
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
};

export default PostPage;
