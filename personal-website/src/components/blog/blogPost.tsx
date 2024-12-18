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
      <div className="blog__post">
        <img src={image} alt={title} className="blog__post-image" />
        <Link to={`${name}`} className="blog__post-title">
          <h2>{title}</h2>
        </Link>
        <Link to={`${name}`} className="blog__post-link">
          {name}
        </Link>
      </div>
    </>
  );
}
export default BlogPost;
