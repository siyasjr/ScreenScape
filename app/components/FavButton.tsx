'use client';

import { useState } from 'react';

const HeartButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="absolute top-2 right-2 p-2 rounded-full bg-white/30 hover:bg-white/50 transition-colors"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={liked ? 'red' : 'none'}
        viewBox="0 0 24 24"
        stroke={liked ? 'red' : 'white'}
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 
          4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 
          4.5 0 010-6.364z"
        />
      </svg>
    </button>
  );
};

export default HeartButton;
