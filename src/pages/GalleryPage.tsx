import { GalleryData } from "../data/gallery/galleryData";
import PhotoMasonry from "../components/gallery/PhotoMasonry";
import LineBreak from "../components/shared/LineBreak";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useState } from "react";
import { GalleryCollectionProps } from "../components/gallery/galleryTypes";

const GalleryPage = () => {
  const [typingDone, setTypingDone] = useState(false);
  const titleText = useTypingEffect("Moments", 70, () => setTypingDone(true));

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
        {typingDone &&
          GalleryData.map((collection: GalleryCollectionProps, index) => (
            <section className="gallery__collection" key={collection.slug}>
              <h2>{collection.title}</h2>
              <PhotoMasonry photoData={collection.photos} />
              {index < GalleryData.length - 1 && <LineBreak width="100%" />}
            </section>
          ))}
      </div>
    </>
  );
};

export default GalleryPage;
