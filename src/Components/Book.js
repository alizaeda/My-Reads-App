import React from 'react';
import Charger from './Charger';

const Book = props => {
  const { title, authors, thumbnail, shelfID } = props;
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>
          <Charger shelfID={shelfID} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    </li>
  );
};

export default Book;
