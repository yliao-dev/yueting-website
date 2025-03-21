import { useState } from "react";
import BlogCategory from "../components/Blog/BlogCategory";
import BlogPost from "../components/Blog/BlogPost";
import { PhotographyEntries } from "../data/blog/PhotographyEntries";
import { KendoEntries } from "../data/blog/KendoEntries";
import { FitnessEntries } from "../data/blog/FitnessEntries";

import "../styles/blog.css";

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
        <BlogCategory onSelect={categoryFilter} />
        <BlogPostsMap category={selectedCategory} />
      </div>
    </>
  );
};

export default BlogPage;
