import meta1 from "../data/galleryMeta1.json";
import meta2 from "../data/galleryMeta2.json";
import { GalleryCollectionProps } from "../components/Gallery/GalleryTypes";
import { createGalleryCollections } from "../components/Gallery/createGalleryCollections";

export const GalleryData: GalleryCollectionProps[] = createGalleryCollections([
  {
    title: "Set 1",
    slug: "set1", // must match folder name
    meta: meta1,
  },
  {
    title: "Set 2",
    slug: "set2",
    meta: meta2,
  },
]);
