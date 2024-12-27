import { useLocation } from "react-router-dom";
import PhotoMap from "../components/Gallery/PhotoMap";
import { PhotoData } from "../data/portfolio/PhotoData";

const GalleryPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const currentItem = params.get("item");

  return (
    <>
      <div className="photography__grid">
        <PhotoMap photoData={PhotoData} currentItem={currentItem} />
      </div>
    </>
  );
};

export default GalleryPage;
