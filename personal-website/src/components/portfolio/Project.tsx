import { useNavigate } from "react-router-dom";

type ProjectItemProps = {
  name: string; // Name of the project
  image: string; // URL of the image
  id: string | number; // ID of the project (type can be adjusted as needed)
};

function ProjectItem({ image, name, id }: ProjectItemProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="portfolio__project-item"
        onClick={() => {
          navigate("project/" + id);
        }}
      >
        <img src={image} className="portfolio__project-item__image" />
        <div className="portfolio__project-item__desc">
          <h4>{name}</h4>
          <p>Project Type</p>
        </div>
      </div>
    </>
  );
}
export default ProjectItem;
