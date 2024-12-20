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
        <img src={image} alt={title} className="blog__post__image" />
        <Link to={`${name}`} className="blog__post__title">
          <h1>{title}</h1>
        </Link>
        <p className="blog__post__desc">{name}</p>
      </div>
    </>
  );
}
export default BlogPost;
