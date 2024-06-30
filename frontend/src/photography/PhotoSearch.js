import React, { useState } from 'react';

const PhotoSearch = () => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Implement API call logic here using `query`
    console.log(`Searching photos for: ${query}`);
    // Example: fetch(`https://api.example.com/photos?q=${query}`)
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Photos..."
        className="search-input"
      />
      <button className="search-button" onClick={handleSearch}>
        Search
      </button>
      {/* Add result display logic here */}
    </div>
  );
};

export default PhotoSearch;

