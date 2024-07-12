import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ items }) => {

  return (
    <ul>
      {items.map(item => {
        return (
          <li key={item.id}>
            <ImageCard onLink={item.urls} onAlt={item.alt_description} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
