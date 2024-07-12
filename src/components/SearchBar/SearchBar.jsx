import toast, { Toaster } from 'react-hot-toast';

const SearchBar = ({ onSearch }) => {
  const handleSubmit = e => {
    e.preventDefault();
    
    const form = e.target;
    const inputValue = form.elements.search.value.trim();

    if (inputValue === '') {
      toast.error('Field are empty!');
    } else {
      onSearch(inputValue);
    }

    form.reset();
  };

  return (
    <header>
      <Toaster />
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          autoComplete='off'
          autoFocus
          placeholder='Search images and photos'
        />
        <button type='submit'>Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
