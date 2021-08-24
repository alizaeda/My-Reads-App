import React from 'react';
import { Link } from 'react-router-dom';
import Book from './Book';

class SearchInput extends React.Component {
  state = {
    searchVal: '',
  };
  handleOnChange = e => {
    this.setState({ searchVal: e.target.value }, () => {
      this.props.onSearch(e.target.value);
    });
  };
  render() {
    const { onReset, books } = this.props;
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
            {books.map(book => (
              <Book key={book.id} book={book} shelfName="none" />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchInput;
