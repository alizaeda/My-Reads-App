import React, { Component } from 'react';
import Book from './Book';
import SearchBtn from './SearchBtn';

class BooksRead extends Component {
  state = {
    selectValue: '',
  };
  render() {
    const { BookShelf, books } = this.props;
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
