import React from 'react';
import { Link } from 'react-router-dom';

class SearchInput extends React.Component {
  state = {
    searchVal: '',
  };
  handleOnChange = e => {
    this.setState(() => ({
      searchVal: e.target.value,
    }));
  };
  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.searchVal}
              onChange={this.handleOnChange}
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
          <ol className="books-grid"></ol>
        </div>
      </div>
    );
  }
}

export default SearchInput;