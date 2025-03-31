import meta1 from "../../public/images/gallery/set1/meta.json";
import meta2 from "../../public/images/gallery/set2/meta.json";
import { createGalleryCollections } from "../components/Gallery/createGalleryCollections";
import { GalleryCollectionProps } from "../components/Gallery/GalleryTypes";

export const GalleryData: GalleryCollectionProps[] = createGalleryCollections([
  {
    title: "Set 1",
    slug: "Set 1 slug",
    meta: meta1,
  },
  {
    title: "Set 2",
    slug: "Set 2 slug",
    meta: meta2,
  },
]);
