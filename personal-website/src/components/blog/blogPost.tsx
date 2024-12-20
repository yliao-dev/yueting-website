import { Link } from "react-router-dom";

type BlogPostProp = {
  id: string | number;
  title: string;
  description: string;
  image: string;
};

function BlogPost({ title, description, image }: BlogPostProp) {
  const author = "Yueting Liao";
  const date = "Dec 20, 2024";
  return (
    <>
      <div className="blog__post">
        <img src={image} className="blog__post__image" />
        <Link to={`${title}`} className="blog__post__title">
          <h1>{title}</h1>
        </Link>
        <p className="blog__post__desc">{description}</p>
        <section className="blog__post__author">
          <span className="blog__post__author-icon">🖊️</span>
          <span className="blog__post__author-name">{author}</span>
          <span className="blog__post__author-date">{date}</span>
        </section>
      </div>
      <div className="page__divider-gradient" />
    </>
  );
}
export default BlogPost;
