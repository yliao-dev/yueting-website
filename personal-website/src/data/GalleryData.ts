import meta1 from "./galleryMeta1.json";
import meta2 from "./galleryMeta2.json";
import { GalleryCollectionProps } from "../components/Gallery/galleryTypes";
import { createGalleryCollections } from "../components/Gallery/createGalleryCollections";

export const GalleryData: GalleryCollectionProps[] = createGalleryCollections([
  {
    title: "Random Collections",
    slug: "set1", // must match folder name
    meta: meta1,
  },
  {
    title: "Landscapes",
    slug: "set2",
    meta: meta2,
  },
]);
