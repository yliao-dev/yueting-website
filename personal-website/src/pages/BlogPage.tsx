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
            name={blog.name}
            title={blog.title}
            image={blog.image}
          />
        ))}
      </>
    );
  };
  return (
    <>
      <section className="blog">
        <h2>Blog</h2>
        <div className="blog-something">
          <BlogPostsMap />
        </div>
      </section>
    </>
  );
};

export default BlogPage;
