import { useState } from "react";
import BlogCategory from "../components/Blog/BlogCategory";
import BlogPost from "../components/Blog/BlogPost";
import { PhotographyEntries } from "../data/blog/PhotographyEntries";
import { KendoEntries } from "../data/blog/KendoEntries";
import { FitnessEntries } from "../data/blog/FitnessEntries";

type BlogPostsMapProps = {
  category: string;
};

const BlogPage = () => {
  const [selectedCategory, setCategory] = useState<string>("");
  const categoryFilter = (category: string) => {
    setCategory(category);
  };
  const BlogPostsMap = ({ category }: BlogPostsMapProps) => {
    let selectedData: any[] = [];

    // Dynamically select the data based on the category
    switch (category) {
      case "kendo":
        selectedData = KendoEntries;
        break;
      case "photography":
        selectedData = PhotographyEntries;
        break;
      case "fitness":
        selectedData = FitnessEntries;
        break;
      default:
        selectedData = KendoEntries; // Default to Kendo if no category is matched
    }

    return (
      <>
        {selectedData.map((blog, index) => (
          <BlogPost
            key={index}
            id={blog.id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
          />
        ))}
      </>
    );
  };
  return (
    <>
      <div className="blog">
        <section className="blog__intro">
          <h1>Reflections</h1>
          <p>
            A space for ideas, lessons, and personal reflections—from everyday
            thoughts to deeper insights.
          </p>
        </section>
        <section className="blog__contentBlock">
          <BlogCategory onSelect={categoryFilter} />
          <BlogPostsMap category={selectedCategory} />
        </section>
      </div>
    </>
  );
};

export default BlogPage;
