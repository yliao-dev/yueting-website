import PhotographyMap from "../components/Gallery/PhotographyMap";
import { PhotoData } from "../data/portfolio/PhotoData";

const GalleryPage = () => {
  return (
    <>
      <div className="photography__grid">
        <PhotographyMap photoData={PhotoData} />
      </div>
    </>
  );
};
export default GalleryPage;
