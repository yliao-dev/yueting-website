export type PhotographyItemProps = {
  id: number;
  title: string;
  image: string;
  tags: string[];
};

function PhotographyItem({ title, image }: PhotographyItemProps) {
  return (
    <>
      <div className="masonry__item">
        <img src={image} alt={title} className="photography__item-image" />
      </div>
    </>
  );
}
export default PhotographyItem;
