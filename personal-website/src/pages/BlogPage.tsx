import BlogCategory from "../components/Blog/blogCategory";
import BlogPost from "../components/Blog/blogPost";
import { PhotographyData } from "../data/blog/photography/photographyData";
import "../styles/blog.css";

const BlogPage = () => {
  const BlogPostsMap = () => {
    return (
      <>
        {PhotographyData.map((blog, index) => (
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
        <BlogCategory />

        <BlogPostsMap />
      </div>
    </>
  );
};

export default BlogPage;
