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
        <p> {description} </p>
        <section className="blog__author">
          <img className="blog__author__icon" src={logo} alt="author" />
          <div className="blog__author__info">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </section>
      </div>
    </>
  );
}
export default BlogPost;
