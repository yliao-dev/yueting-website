import { useNavigate } from "react-router-dom";

type ProjectItemProps = {
  name: string; // Name of the project
  image: string; // URL of the image
  id: string | number; // ID of the project (type can be adjusted as needed)
};

function ProjectItem({ image, name, id }: ProjectItemProps) {
  const navigate = useNavigate();
  return (
    <div
      className="portfolio__project-item"
      onClick={() => {
        navigate("/project" + id);
      }}
    >
      <div
        className="portfolio__project-item__bg-image"
        style={{ backgroundImage: `url(${image})` }}
      />
      <h1>{name}</h1>
    </div>
  );
}
export default ProjectItem;
