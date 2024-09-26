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
<div className="mb-6 h-96 overflow-y-auto bg-gray-800 rounded-lg shadow-md fadeIn">
  <div className="p-4 space-y-4">
    {comments.map((comment) => (
      <div key={comment.id} className="bg-gray-700 rounded-lg p-4 shadow-sm hover:bg-gray-600 cursor-pointer">
        <div className="flex items-center mb-2">
          <img className="w-10 h-10 rounded-full mr-3" src={comment.authorProfileImageUrl} alt="Avatar" />
          <div>
            <p className="font-semibold text-gray-200">{comment.authorDisplayName}</p>
            <p className="text-sm text-gray-400">{new Date(comment.publishedAt).toLocaleDateString()}</p>
          </div>
        </div>
        <p className="text-gray-300">{comment.textDisplay}</p>
      </div>
    ))}
  </div>
</div>

  );
};