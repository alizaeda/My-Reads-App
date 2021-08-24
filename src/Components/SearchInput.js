import React from 'react';
import { Link } from 'react-router-dom';
// import Book from './Book';
import SearchResults from './SearchResults';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
  state = {
    searchVal: '',
  };
  static propTypes = {
    books: PropTypes.array.isRequired,
    onSearch: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
    applyBookShelf: PropTypes.func.isRequired,
    searchBooks: PropTypes.array.isRequired,
  };
  handleOnChange = e => {
    this.setState({ searchVal: e.target.value }, () => {
      this.props.onSearch(e.target.value);
    });
  };
  render() {
    const { onReset, applyBookShelf, searchBooks, books } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onReset}>
              Close
            </button>
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchVal}
              onChange={this.handleOnChange}
              autoFocus
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <SearchResults
              searchBooks={searchBooks}
              applyBookShelf={applyBookShelf}
              books={books}
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchInput;
