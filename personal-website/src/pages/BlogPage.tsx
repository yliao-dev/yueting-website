import { useState } from "react";
import BlogCategory from "../components/blog/BlogCategory";
import { BlogData } from "../data/BlogData"; // unified list with `category`
import LineBreak from "../components/LineBreak";
import { useTypingEffect } from "../hooks/useTypingEffect";
import BlogPost from "../components/blog/blogPost";

const BlogPage = () => {
  const [selectedCategory, setCategory] = useState<string>("");
  const [typingDone, setTypingDone] = useState(false);
  const titleText = useTypingEffect("Reflections", 50, () =>
    setTypingDone(true)
  );

  const filteredEntries = selectedCategory
    ? BlogData.filter((entry) => entry.category === selectedCategory)
    : BlogData;

  return (
    <div className="blog">
      <section className="blog__intro">
        <h1 className="typing-cursor">{titleText}</h1>
        <p>
          A space for ideas, lessons, and personal reflections—from everyday
          thoughts to deeper insights.
        </p>
      </section>

      <BlogCategory onSelect={setCategory} />
      <LineBreak />

      {typingDone && (
        <section className="blog__contentBlock">
          {filteredEntries.map((blog) => (
            <BlogPost
              key={blog.id}
              id={blog.id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
            />
          ))}
        </section>
      )}
    </div>
  );
};

export default BlogPage;
