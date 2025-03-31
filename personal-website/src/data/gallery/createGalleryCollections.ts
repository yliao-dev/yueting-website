type MetaEntry = {
  filename: string;
  title: string;
  location: string;
  date: string;
  tags?: string[];
};

type GalleryCollection = {
  title: string;
  slug: string;
  cover: string;
  photos: {
    id: string;
    title: string;
    image: string;
    location: string;
    date: string;
    tags?: string[];
  }[];
};

export function createGalleryCollections(
  collections: {
    title: string;
    slug: string;
    meta: MetaEntry[];
  }[]
): GalleryCollection[] {
  return collections.map(({ title, slug, meta }) => ({
    title,
    slug,
    cover: `/images/gallery/${slug}/${meta[0]?.filename}`, // first image as cover
    photos: meta.map((entry) => ({
      id: `${slug}-${entry.filename}`,
      title: entry.title,
      image: `/images/gallery/${slug}/${entry.filename}`,
      location: entry.location,
      date: entry.date,
      tags: entry.tags,
    })),
  }));
}
