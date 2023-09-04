import React from 'react';

function Filter({ onFilterChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={(e) => onFilterChange('title', e.target.value)}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => onFilterChange('rating', e.target.value)}
      />
    </div>
  );
}

export default Filter;
