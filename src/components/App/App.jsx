import LoadMoreBtn from '../LoadMoreButton/LoadMoreButton';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
// import ImageCard from '../ImageCard/ImageCard';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import ImageModal from '../ImageModal/ImageModal';

function App() {
  const handleSubmit = value => {
    console.log(value);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery />
      <Loader />
      <LoadMoreBtn />
      <ImageModal />
      <ErrorMessage />
    </div>
  );
}

export default App;
