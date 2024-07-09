import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const inputValue = form.elements.search.value.trim();

    if (inputValue === '') {
      toast('Field are empty!');
      console.log('Field are empty!');
    } else {
      onSubmit(inputValue);
    }

    form.reset();
  };

  return (
    <header>
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
