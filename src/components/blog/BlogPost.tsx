import { useNavigate } from "react-router-dom";
import LineBreak from "../shared/LineBreak";
import { PostItemProp } from "./blogTypes";

function BlogPost({
  id,
  title,
  author,
  date,
  description,
  coverImage,
}: PostItemProp) {
  const navigate = useNavigate();
  return (
    <>
      <div className="blog__post">
        <img className="blog__post__cover" src={coverImage} />
        <div className="blog__post__text">
          <h2>{title}</h2>
          <p> {description} </p>
          <p
            className="blog__read-more"
            onClick={() => navigate(`/blog/post/${id}`)}
          >
            Read More →
          </p>
        </div>
        <div className="blog__author">
          <img className="blog__author__icon" src="/logo.svg" alt="author" />
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
