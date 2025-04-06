import { useParams, useNavigate } from "react-router-dom";
import { BlogData } from "../data/blog/blogData";
import PageNotFound from "./PageNotFound";

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const index = BlogData.findIndex((p) => String(p.id) === id);
  const post = BlogData[index];
  if (!post) return <PageNotFound />;
  return (
    <>
      <div>Title</div>
    </>
  );
};

export default PostPage;
