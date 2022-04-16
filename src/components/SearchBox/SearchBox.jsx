import './styles.css';

const SearchBox = ({ className, placeholder, onChangeHandler }) => {
  return (
    <div>
      <input
        type="search"
        className={`${className} monsters-search-box`}
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default SearchBox;
