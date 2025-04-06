import { useNavigate } from "react-router-dom";
import LineBreak from "../shared/LineBreak";
import { PostItemProp } from "./blogTypes";
import BlogAuthor from "./BlogAuthor";

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
        <BlogAuthor author={author} date={date} />
      </div>
      <LineBreak variant="gradient" />
    </>
  );
}
export default BlogPost;
