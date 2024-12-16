import { useNavigate } from "react-router-dom";

type ProjectItemProps = {
  image: string; // URL of the image
  name: string; // Name of the project
  id: string | number; // ID of the project (type can be adjusted as needed)
};

function ProjectItem({ image, name, id }: ProjectItemProps) {
  const navigate = useNavigate();
  return (
    <div
      className="project-item"
      onClick={() => {
        navigate("/project" + id);
      }}
    >
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h1>{name}</h1>
    </div>
  );
}
export default ProjectItem;
