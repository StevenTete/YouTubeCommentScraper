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
    className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-1 md:py-2 px-2 md:px-4 rounded transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500 text-xs md:text-xl"
  >
    Load More
  </button>
</div>

  );
};