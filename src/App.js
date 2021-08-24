import React, { Component } from 'react';
import './style/App.css';
import SearchInput from './Components/SearchInput';
import MyReads from './Components/MyReads';
import { Route } from 'react-router-dom';
import * as BooksAPI from './API/BooksAPI';

class App extends Component {
  BookShelf = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to read' },
    { key: 'read', name: 'Read' },
  ];
  state = {
    err: false,
    books: [],
    searchBooks: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
    // .catch(err => this.setState({ err: true }));
  }
  applyBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      // console.log('====================================');
      // console.log(book);
      // console.log('====================================');
    });
    const { books } = this.state;
    this.setState({
      books: books.map(b => {
        if (b.id === book.id) {
          b.shelf = shelf;
        }
        return b;
      }),
    });
  };
  searchBooks = searchVal => {
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
  };
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    return (
      <div className="app">
        <Route
          path="/search"
          render={() => (
            <SearchInput
              onSearch={this.searchBooks}
              onReset={this.resetSearch}
              books={this.state.searchBooks}
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
