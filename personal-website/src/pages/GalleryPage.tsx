import { PhotoData } from "../data/PhotoData";
import PhotoMasonry from "../components/Gallery/PhotoMasonry";
import LineBreak from "../components/LineBreak";
import { useTypingEffect } from "../hooks/useTypingEffect";

const GalleryPage = () => {
  const titleText = useTypingEffect("Moments");
  return (
    <>
      <div className="gallery">
        <section className="gallery__intro">
          <h1 className="typing-cursor">{titleText}</h1>
          <p>
            A collection of moments, perspectives, and stories—captured through
            my lens. I started photography in November 2023 with my first
            camera, the FUJIFILM X-T5. These images were shot using the XF 35mm
            f/1.4, XF 18–55mm f/2.8–4, and XF 70–300mm f/4–5.6 lenses, and
            edited in Capture One.
          </p>
        </section>
        <LineBreak />
        <section>
          <PhotoMasonry photoData={PhotoData} />
          <LineBreak width="100%" spacing="3rem" />
          <PhotoMasonry photoData={PhotoData} />
          <LineBreak width="100%" spacing="3rem" />
          <PhotoMasonry photoData={PhotoData} />
        </section>
      </div>
    </>
  );
};

export default GalleryPage;
