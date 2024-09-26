import React from 'react';

interface PaginationProps {
  onLoadMore: () => void;
  hasMore: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({ onLoadMore, hasMore }) => {
  if (!hasMore) return null;

  return (
<div className="flex justify-center mb-6">
  <button
    onClick={onLoadMore}
    className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500"
  >
    Load More
  </button>
</div>

  );
};