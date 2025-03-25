import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import LineBreak from "../LineBreak";

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
      <LineBreak variant="gradient" />

      <div className="blog__post">
        <img src={image} className="blog__post__image" />
        <Link to={`${title}`} className="blog__post__title">
          <h2>{title}</h2>
        </Link>
        <p className="blog__post__desc">{description}</p>
        <section className="blog__post__author">
          <img className="blog__post__author-icon" src={logo} />
          <span className="blog__post__author-name">{author}</span>
          <span className="blog__post__author-date">{date}</span>
        </section>
      </div>
    </>
  );
}
export default BlogPost;
