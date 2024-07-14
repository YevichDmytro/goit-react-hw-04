import Modal from 'react-modal';
// import css from './ImageModal.modal.css'

const ImageModal = ({
  openCloseModal,
  modalImg: { urls, alt_description },
}) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      border: 'none',
      background: 'transparent',
    },
  };

  Modal.setAppElement('#root');

  return (
    <Modal
      isOpen={true}
      overlayClassName=''
      style={customStyles}
      onRequestClose={() => openCloseModal()}
    >
      <img src={urls.regular} alt={alt_description} />
      <div className=''>
        <p>{alt_description}</p>
      </div>
    </Modal>
  );
};

export default ImageModal;
