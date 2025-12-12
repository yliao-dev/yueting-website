import meta1 from "./collection1Meta.json";
import meta2 from "./collection2Meta.json";
import meta3 from "./collection3Meta.json";
import meta4 from "./collection4Meta.json";
import meta5 from "./collection5Meta.json";
import meta6 from "./collection6Meta.json";
import meta7 from "./collection7Meta.json";
import meta8 from "./collection8Meta.json";
import meta9 from "./collection9Meta.json";
import meta10 from "./collection10Meta.json";

import meta11 from "./collection11Meta.json";
import meta12 from "./collection12Meta.json";
import meta13 from "./collection13Meta.json";
import meta14 from "./collection14Meta.json";
import meta15 from "./collection15Meta.json";
import meta16 from "./collection16Meta.json";
import meta17 from "./collection17Meta.json";

import { createGalleryCollections } from "./createGalleryCollections";
import { GalleryCollectionProps } from "../../types/galleryTypes";

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
  {
    title: "",
    slug: "collection7",
    meta: meta7,
  },
  {
    title: "",
    slug: "collection8",
    meta: meta8,
  },
  {
    title: "",
    slug: "collection9",
    meta: meta9,
  },
  {
    title: "",
    slug: "collection10",
    meta: meta10,
  },
  {
    title: "",
    slug: "collection11",
    meta: meta11,
  },
  {
    title: "",
    slug: "collection12",
    meta: meta12,
  },
  {
    title: "",
    slug: "collection13",
    meta: meta13,
  },
  {
    title: "",
    slug: "collection14",
    meta: meta14,
  },
  {
    title: "",
    slug: "collection15",
    meta: meta15,
  },
  {
    title: "",
    slug: "collection16",
    meta: meta16,
  },
  {
    title: "",
    slug: "collection17",
    meta: meta17,
  },
]);
