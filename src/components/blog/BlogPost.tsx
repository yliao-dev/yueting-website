import { useNavigate } from "react-router-dom";
import LineBreak from "../shared/LineBreak";
import { PostItemProp } from "./blogTypes";

function BlogPost({ id, title, description, date, coverImage }: PostItemProp) {
  const author = "Yueting Liao";
  const navigate = useNavigate();
  return (
    <>
      <div className="blog__post">
        <img src={coverImage} />
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
