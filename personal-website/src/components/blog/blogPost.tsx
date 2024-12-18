import { Link } from "react-router-dom";

type BlogPostProp = {
  id: string | number;
  name: string;
  title: string;
  image: string;
};

function BlogPost({ name, title, image }: BlogPostProp) {
  return (
    <>
      <div className="blogPost">
        <img src={image} alt={title} className="blogPostImage" />
        <h2>{title}</h2>
        <Link to={`${name}`} className="blogPostAuthorLink">
          {" "}
          {name}{" "}
        </Link>
      </div>
    </>
  );
}
export default BlogPost;
