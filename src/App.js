import React, { Component } from 'react';
import './style/App.css';
import SearchInput from './Components/SearchInput';
import MyReads from './Components/MyReads';
import { Route } from 'react-router-dom';
import * as BooksAPI from './API/BooksAPI';
import { debounce } from 'throttle-debounce';

class App extends Component {
  /**
   * key: is the same of the value in Charger Component (Select- Option)
   * name: render the UI main page shelves Name
   */
  BookShelf = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to read' },
    { key: 'read', name: 'Read' },
  ];
  state = {
    books: [],
    searchBooks: [],
  };
  /**
   * Using ComponentDidMount for getAll AJAX
   */
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
    // .catch(err => this.setState({ err: true }));
  }
  /**
   * TODO: Apply Book Shelf in HomePage and SearchPage By Using Charger Component
   * @param {*} book : Books in Array
   * @param {*} shelf : SHelfName in Books Array
   */
  applyBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    // const { books } = this.state;
    let updatedBooks = [];
    updatedBooks = this.state.books.filter(b => b.id !== book.id);
    if (shelf !== 'none') {
      book.shelf = shelf;
      updatedBooks = updatedBooks.concat(book);
    }
    this.setState({
      books: updatedBooks,
    });
  };
  /**
   * TODO: Reset Book Component in Search Page
   */
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };
  /**
   * @param {string}: For Search page input value
   * @function: debounce callback to handle UX
   */
  searchBooks = debounce(300, false, searchVal => {
    if (searchVal.length > 0) {
      BooksAPI.search(searchVal).then(books => {
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchInput
              onSearch={this.searchBooks}
              onReset={this.resetSearch}
              searchBooks={this.state.searchBooks}
              applyBookShelf={this.applyBookShelf}
              books={this.state.books}
            />
          )}
        />
        <Route
          exact
          path="/"
          render={() => (
            <MyReads
              BookShelf={this.BookShelf}
              books={this.state.books}
              applyBookShelf={this.applyBookShelf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;

// {/* <SearchBtn /> */}
