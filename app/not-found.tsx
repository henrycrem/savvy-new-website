
import Link from 'next/link';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src="/images/404_illustration.png" alt="404 Illustration" className="w-64 mb-8" />
      <h1 className="text-2xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
      <p className="text-gray-600">The page you are looking for does not exist.</p>
      <Link href="/" className='text-2xl font-extrabold cursor-pointer mt-4'>Go Back Home</Link>
    </div>
  );
};

export default NotFound;
