import PhotographyMap from "../components/portfolio/PhotographyMap";
import { PhotoData } from "../data/portfolio/PhotoData";

const PhotographyPage = () => {
  return (
    <>
      <div className="photography__grid">
        <PhotographyMap photoData={PhotoData} />
      </div>
    </>
  );
};
export default PhotographyPage;
