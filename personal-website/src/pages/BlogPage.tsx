import BlogPost from "../components/blog/blogPost";
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
      <section className="blog">
        <BlogPostsMap />
      </section>
    </>
  );
};

export default BlogPage;
