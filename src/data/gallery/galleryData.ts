import meta1 from "./galleryMeta1.json";
import meta2 from "./galleryMeta2.json";
import { createGalleryCollections } from "./createGalleryCollections";
import { GalleryCollectionProps } from "../../components/gallery/galleryTypes";

export const GalleryData: GalleryCollectionProps[] = createGalleryCollections([
  {
    title: "Random Collections",
    slug: "collection1", // must match folder name
    meta: meta1,
  },
  {
    title: "",
    slug: "collection2",
    meta: meta2,
  },
]);
