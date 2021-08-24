import React, { Component } from 'react';

class Charger extends Component {
  state = {
    chargerValue: this.props.shelfName,
  };
  handleOnChange = event => {
    const { chargerValue } = this.state;
    // this.setState({ chargerValue: event.target.value });
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
