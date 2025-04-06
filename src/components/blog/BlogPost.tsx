import { Link } from "react-router-dom";
import LineBreak from "../shared/LineBreak";
import { BlogPostProp } from "./blogTypes";

function BlogPost({ title, description, date, coverImage }: BlogPostProp) {
  const author = "Yueting Liao";
  return (
    <>
      <div className="blog__post">
        <img src={coverImage} />
        <div className="blog__post__text">
          <h2>{title}</h2>
          <p> {description} </p>
          <Link to={`${title}`} className="blog__read-more">
            Read More →
          </Link>
        </div>
        <div className="blog__author">
          <img src="/logo.svg" alt="author" />
          <div className="blog__author__info">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
      <LineBreak variant="gradient" />
    </>
  );
}
export default BlogPost;
