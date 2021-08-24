import React from 'react';
import { Link } from 'react-router-dom';
/*
  TODO: For Open Search Book Page
  Changed Style from button element to specific class
*/

const SearchBtn = () => {
  return (
    <div className="open-search">
      <Link className="button" to="/search">
        Add a book
      </Link>
    </div>
  );
};

export default SearchBtn;
