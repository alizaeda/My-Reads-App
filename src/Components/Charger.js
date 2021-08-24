import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Charger extends Component {
  state = {
    chargerValue: this.props.shelfName,
  };
  static propTypes = {
    shelfName: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    applyBookShelf: PropTypes.func.isRequired,
  };
  handleOnChange = event => {
    const { value } = event.target;
    this.setState({
      chargerValue: value,
    });
    this.props.applyBookShelf(this.props.book, value);
  };
  render() {
    const { chargerValue } = this.state;
    return (
      <div className="book-shelf-changer">
        <select value={chargerValue} onChange={this.handleOnChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default Charger;
