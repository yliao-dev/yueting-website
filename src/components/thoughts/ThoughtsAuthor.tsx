import { ThoughtsAuthorProps } from "../../types/thoughtsTypes";

const ThoughtsAuthor = ({ author, date }: ThoughtsAuthorProps) => {
  return (
    <div className="thoughts__author">
      <img className="thoughts__author__icon" src="/logo.svg" alt="author" />
      <div className="thoughts__author__info">
        <span>{author}</span>
        <span>{date}</span>
      </div>
    </div>
  );
};

export default ThoughtsAuthor;
