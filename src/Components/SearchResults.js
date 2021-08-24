import React from 'react';
import Book from './Book';

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

export default SearchResults;
