// import React from 'react';

// const LoadingSkeleton = () => {
//   return (
//     <div className="p-4 space-y-4">
//       <div className="w-full h-4 bg-gray-200 rounded-lg"></div>
//       <div className="w-full h-4 bg-gray-200 rounded-lg"></div>
//       <div className="w-full h-4 bg-gray-200 rounded-lg"></div>
//       <div className="w-full h-4 bg-gray-200 rounded-lg"></div>
//     </div>
//   );
// };

// export default LoadingSkeleton;

"use client";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const LoadingSkeleton = () => {
    return <Skeleton count={13} />
};

export default LoadingSkeleton;