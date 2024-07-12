const LoadMoreButton = ({ onPage }) => {
  return (
    <>
      <button type='button' onClick={() => onPage()}>
        Load more
      </button>
    </>
  );
};

export default LoadMoreButton;
