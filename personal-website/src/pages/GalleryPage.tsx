import { PhotoData } from "../data/portfolio/PhotoData";
import PhotoMasonry from "../components/Gallery/PhotoMasonry";

const GalleryPage = () => {
  return (
    <>
      <div className="gallery">
        <section className="gallery__intro">
          <h1>Moments</h1>
          <h3>FUJIFILM X-T5</h3>
          <h2>XF 35mm f/1.4</h2>
          <h2>XF 18-55 mm f/2.8-4</h2>
          <h2>XF 70-300mm f/4-5.6</h2>
          <p>
            A collection of moments, perspectives, and stories—captured through
            my lens.
          </p>
        </section>
        <section>
          <PhotoMasonry photoData={PhotoData} />
        </section>
      </div>
    </>
  );
};

export default GalleryPage;
