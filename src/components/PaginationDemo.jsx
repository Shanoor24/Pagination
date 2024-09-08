import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Pagination from './Pagination';

const PaginationDemo = () => {
  const { pageNumber } = useParams(); // Get the page number from the URL
  const navigate = useNavigate();
  const currentPage = parseInt(pageNumber, 10) || 1;
  const totalPages = 10;

  // Handle page change by navigating to the new URL
  const onPageChange = (page) => {
    navigate(`/page/${page}`);
  };

  return (
    <div>
      <h1>Pagination with Routing</h1>
      <p>Currently on page {currentPage}</p>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationDemo;
