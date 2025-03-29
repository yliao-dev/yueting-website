import { useNavigate } from "react-router-dom";

export type ProjectItemProps = {
  name: string;
  image: string;
  id: string | number;
};

function ProjectItem({ image, name, id }: ProjectItemProps) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="portfolio__project"
        onClick={() => {
          navigate("project/" + id);
        }}
      >
        <img src={image} />
        <div className="portfolio__project__text">
          <h2>{name}</h2>
          <p>
            Project Type Project Type Project Type Project Type Project Type
            Project Type Project Type Project Type
          </p>
        </div>
      </div>
    </>
  );
}
export default ProjectItem;
