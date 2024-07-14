import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ items, handleOpenModal }) => {
  return (
    <ul>
      {items.map(({ id, urls, alt_description }) => {
        return (
          <li key={id} onClick={handleOpenModal}>
            <ImageCard onLink={urls} onAlt={alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
