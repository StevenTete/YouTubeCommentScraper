import React from 'react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center mb-6">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-100"></div>
    </div>
  );
};