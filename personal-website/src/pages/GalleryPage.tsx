import { PhotoData } from "../data/portfolio/PhotoData";
import PhotoMasonry from "../components/Gallery/PhotoMasonry";

const GalleryPage = () => {
  return (
    <>
      <div className="gallery">
        <section className="gallery__intro">
          <h1>Moments</h1>
          <h3>FujiFilm X-T5</h3>
          <p>
            A collection of moments, perspectives, and stories—captured through
            my lens.
          </p>
        </section>
        <PhotoMasonry photoData={PhotoData} />
      </div>
    </>
  );
};

export default GalleryPage;
