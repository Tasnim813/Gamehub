import React from 'react';

const Loading = () => {
    return (
       <div className="max-w-[1440px] mx-auto px-2 mt-10">
      <div className="flex items-center justify-center gap-2">
        <span className="loading loading-spinner text-primary w-32"></span>
        <p className="text-4xl font-bold text-gray-600">Loading...</p>
      </div>
    </div>
    );
};

export default Loading;