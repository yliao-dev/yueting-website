import meta1 from "./collection1Meta.json";
import meta2 from "./collection2Meta.json";
import meta3 from "./collection3Meta.json";
import meta4 from "./collection4Meta.json";
import meta5 from "./collection5Meta.json";
import meta6 from "./collection6Meta.json";

import { createGalleryCollections } from "./createGalleryCollections";
import { GalleryCollectionProps } from "../../types/galleryTypes";

export const GalleryData: GalleryCollectionProps[] = createGalleryCollections([
  {
    title: "Random Collections",
    slug: "collection1", // must match folder name
    meta: meta1,
  },
  {
    title: "some title",
    slug: "collection2",
    meta: meta2,
  },
  {
    title: "",
    slug: "collection3",
    meta: meta3,
  },
  {
    title: "",
    slug: "collection4",
    meta: meta4,
  },
  {
    title: "",
    slug: "collection5",
    meta: meta5,
  },
  {
    title: "",
    slug: "collection6",
    meta: meta6,
  },
]);
