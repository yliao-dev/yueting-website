import { BlogAuthorProps } from "../../types/blogTypes";

const BlogAuthor = ({ author, date }: BlogAuthorProps) => {
  return (
    <div className="blog__author">
      <img className="blog__author__icon" src="/logo.svg" alt="author" />
      <div className="blog__author__info">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default BlogAuthor;
