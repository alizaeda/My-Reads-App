import React, { Component } from 'react';
import './style/App.css';
import SearchInput from './Components/SearchInput';
import MyReads from './Components/MyReads';
import { Route } from 'react-router-dom';
import * as BooksAPI from './API/BooksAPI';
import getAll from './Components/data';

class App extends Component {
  BookShelf = [
    { key: 'currentlyReading', name: 'Currently Reading' },
    { key: 'wantToRead', name: 'Want to read' },
    { key: 'read', name: 'Read' },
  ];
  state = {
    err: false,
    books: [],
  };
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books });
    });
    // .catch(err => this.setState({ err: true }));
  }
  applyBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      this.setState({});
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

  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchInput} />
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
