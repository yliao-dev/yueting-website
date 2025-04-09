import { useNavigate } from "react-router-dom";
import LineBreak from "../shared/LineBreak";
import { PostItemProp } from "./blogTypes";
import BlogAuthor from "./BlogAuthor";
import { useState } from "react";

function BlogPost({
  id,
  title,
  author,
  date,
  description,
  coverImage,
}: PostItemProp) {
  const navigate = useNavigate();

  const [blogLoaded, setBlogLoaded] = useState(false);
  return (
    <>
      <div
        className={`blog__post ${blogLoaded ? "loaded" : ""}`}
        onLoad={() => setBlogLoaded(true)}
      >
        <img className="blog__post__cover" src={coverImage} />
        <div className="blog__post__text">
          <h2 onClick={() => navigate(`/blog/post/${id}`)}>{title}</h2>
          <p> {description} </p>
        </div>

        <div className="blog__detail">
          <p
            className="blog__readMore"
            onClick={() => navigate(`/blog/post/${id}`)}
          >
            Read More &#10095;
          </p>
          <BlogAuthor author={author} date={date} />
        </div>
      </div>
      <LineBreak variant="gradient" />
    </>
  );
}
export default BlogPost;
