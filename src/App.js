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
    Books: [],
    err: false,
    books: getAll,
  };
  componentDidMount() {
    BooksAPI.getAll()
      .then(book => {
        this.setState({ Books: book });
        // console.log('====================================');
        // console.log(book);
        // console.log('====================================');
      })
      .catch(err => this.setState({ err: true }));
  }
  moveBook = (book, shelf) => {
    this.setState({
      books: {
        shelf: shelf,
      },
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
            <MyReads BookShelf={this.BookShelf} books={this.state.books} />
          )}
        />
      </div>
    );
  }
}

export default App;

// {/* <SearchBtn /> */}
