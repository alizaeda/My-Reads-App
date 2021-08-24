import React, { Component } from 'react';
import Book from './Book';
import SearchBtn from './SearchBtn';
import PropTypes from 'prop-types';

class BooksRead extends Component {
  state = {
    selectValue: '',
  };
  static propTypes = {
    BookShelf: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    applyBookShelf: PropTypes.func.isRequired,
  };
  render() {
    const { BookShelf, books, applyBookShelf } = this.props;
    return (
      <div>
        <div className="list-books-title">
          <div className="list-books">
            <h1>MyReads</h1>
          </div>
        </div>

        <div className="list-books-content">
          {BookShelf.map(shelf => {
            return (
              <div key={shelf.key} className="bookshelf">
                <h2 className="bookshelf-title">{shelf.name}</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books
                      .filter(book => book.shelf === shelf.key)
                      .map(book => {
                        return (
                          <Book
                            key={book.id}
                            authors={book.authors}
                            title={book.title}
                            thumbnail={book.imageLinks.thumbnail}
                            shelfName={book.shelf}
                            book={book}
                            applyBookShelf={applyBookShelf}
                          />
                        );
                      })}
                  </ol>
                </div>
              </div>
            );
          })}
        </div>
        <SearchBtn />
      </div>
    );
  }
}

export default BooksRead;
