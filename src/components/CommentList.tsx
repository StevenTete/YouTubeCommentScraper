import React from 'react';

interface Comment {
  id: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  publishedAt: string;
  textDisplay: string;
}

interface CommentListProps {
  comments: Comment[];
}

export const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  if (comments.length === 0) {
    return <p className="text-center text-gray-600">No comments loaded yet.</p>;
  }

  return (
<div className="mb-6 md:max-h-96 max-h-56 h-auto overflow-y-auto bg-gray-800 rounded-lg shadow-md fadeIn">
  <div className="md:p-4 p-2 md:space-y-4 space-y-2">
    {comments.map((comment) => (
      <div key={comment.id} className="bg-gray-700 rounded-lg md:p-4 p-2 shadow-sm hover:bg-gray-600 cursor-pointer">
        <div className="flex items-center mb-2">
          <img className="md:size-10 size-7 rounded-full mr-3" src={comment.authorProfileImageUrl} alt="Avatar" />
          <div>
            <p className="font-semibold text-gray-200 md:text-lg text-xs">{comment.authorDisplayName}</p>
            <p className="text-gray-400 md:text-sm text-xs">{new Date(comment.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
        <p className="text-gray-300 md:text-base text-xs">{comment.textDisplay}</p>
      </div>
    ))}
  </div>
</div>

  );
};