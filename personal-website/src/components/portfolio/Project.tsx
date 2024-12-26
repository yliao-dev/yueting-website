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
        <img src={image} className="portfolio__project__image" />
        <div className="portfolio__project__desc">
          <h4>{name}</h4>
          <p>Project Type</p>
        </div>
      </div>
    </>
  );
}
export default ProjectItem;
