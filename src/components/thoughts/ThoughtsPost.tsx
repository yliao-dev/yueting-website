import { useNavigate } from "react-router-dom";
import LineBreak from "../shared/LineBreak";
import { PostItemProp } from "../../types/thoughtsTypes";
import ThoughtsAuthor from "./ThoughtsAuthor";
import { useState } from "react";

function ThoughtsPost({
  id,
  title,
  author,
  date,
  description,
  coverImage,
}: PostItemProp) {
  const navigate = useNavigate();

  const [thoughtsLoaded, setThoughtsLoaded] = useState(false);
  return (
    <>
      <div
        className={`thoughts__post ${thoughtsLoaded ? "loaded" : ""}`}
        onLoad={() => setThoughtsLoaded(true)}
      >
        <img className="thoughts__post__cover" src={coverImage} />
        <div className="thoughts__post__text">
          <h2 onClick={() => navigate(`/thoughts/post/${id}`)}>{title}</h2>
          <p> {description} </p>
        </div>

        <div className="thoughts__detail">
          <p
            className="thoughts__readMore"
            onClick={() => navigate(`/thoughts/post/${id}`)}
          >
            Read More &#10095;
          </p>
          <ThoughtsAuthor author={author} date={date} />
        </div>
      </div>
      <LineBreak variant="gradient" />
    </>
  );
}
export default ThoughtsPost;
