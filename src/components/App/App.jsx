import { useEffect, useState } from 'react';
import { fetchGallery } from '../../unsplash-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import Loader from '../Loader/Loader';
import LoadMoreBtn from '../LoadMoreButton/LoadMoreButton';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function App() {
  const [topic, setTopic] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [gallery, setGallery] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [totalPages, setTotalPages] = useState(999);

  const [openModal, setOpenModal] = useState(false);
  // const [modalImg, setModalImg] = useState({});

  const handleSearch = async newTopic => {
    setGallery([]);
    setCurrentPage(1);
    setTopic(newTopic);
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (topic === '') return;

    const getGallery = async () => {
      try {
        setLoader(true);
        setError(false);
        const data = await fetchGallery(topic, currentPage);
        setTotalPages(data.total_pages);
        setGallery(prevGallery => [...prevGallery, ...data.results]);
      } catch (error) {
        setError(true);
      } finally {
        setLoader(false);
      }
    };
    getGallery();
  }, [topic, currentPage]);

  // const openCloseModal = () => {
  //   setOpenModal(!openModal);
  //   if (openModal) document.body.style.overflow = 'auto';
  //   else document.body.style.overflow = 'hidden';
  // };

  const handleOpenModal = id => {
    console.log(id);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {gallery.length > 0 && <ImageGallery items={gallery} />}

      <ImageGallery items={gallery} handleOpenModal={handleOpenModal} />

      {/* 
      {openModal && (
        <ImageModal openCloseModal={openCloseModal} modalImg={modalImg} />
      )} */}

      {error && <ErrorMessage />}
      {loader && <Loader />}
      {gallery.length > 0 && !loader && currentPage < totalPages && (
        <LoadMoreBtn onPage={handleLoadMore} />
      )}
      {currentPage >= totalPages && <p>This is the end of gallery</p>}
      {totalPages === 0 && <p>No one image for this request</p>}
    </div>
  );
}

export default App;
