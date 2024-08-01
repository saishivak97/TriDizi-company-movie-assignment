import React from 'react';
import './index.css'

const Pagination = ({ page, totalPages, onPageChange }) => {
  return (
    <div className='pagination-container'>
      <button className='pagination-end-buttons' onClick={() => onPageChange(page - 1)} disabled={page <= 1}>Previous</button>
      <span className='each-page-button'>Page {page} of {totalPages}</span>
      <button className='pagination-end-buttons' onClick={() => onPageChange(page + 1)} disabled={page >= totalPages}>Next</button>
    </div>
  );
};

export default Pagination;
