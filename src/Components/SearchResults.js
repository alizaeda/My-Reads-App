import React from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

const SearchResults = props => {
  const { searchBooks, applyBookShelf, books } = props;

  return searchBooks
    .map(book => {
      books.map(b => {
        if (b.id === book.id) {
          book.shelf = b.shelf;
        }
        return b;
      });
      return book;
    })
    .map(book => (
      <Book
        key={book.id}
        book={book}
        shelfName={book.shelf ? book.shelf : 'none'}
        applyBookShelf={applyBookShelf}
      />
    ));
};

SearchResults.propTypes = {
  searchBooks: PropTypes.array.isRequired,
  applyBookShelf: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,
};

export default SearchResults;
