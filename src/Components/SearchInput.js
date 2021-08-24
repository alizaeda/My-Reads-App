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
          <h2>You Can Search With This Terms</h2>
          <q>
            'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen',
            'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief',
            'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics',
            'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development',
            'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education',
            'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness',
            'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo',
            'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn',
            'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery',
            'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry',
            'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics',
            'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh',
            'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel',
            'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
          </q>
          <ol className="books-grid">
            {books.map(book => (
              <Book
                key={book.id}
                title={book.title}
                thumbnail={book.thumbnail}
                shelfName="none"
                authors={book.authors}
              />
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchInput;
