import React from 'react';
import Charger from './Charger';

const Book = props => {
  const { shelfName, book, applyBookShelf } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${
                book.imageLinks
                  ? book.imageLinks.thumbnail
                  : 'https://www.svgrepo.com/show/225294/book-placeholder.svg'
              })`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
          <Charger
            shelfName={shelfName}
            book={book}
            applyBookShelf={applyBookShelf}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{`${book.authors}, `}</div>
      </div>
    </li>
  );
};

export default Book;
