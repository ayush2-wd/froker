import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination'; 
import { stories } from './blogdata';

const PopularPosts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const popularStories = stories.filter(story => story.popular);

  const currentStories = popularStories.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const truncateText = (text, maxLength) => (
    text.length > maxLength ? `${text.substring(0, maxLength)}...` : text
  );

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[#3D3D3D] text-left font-bold text-[clamp(1.6rem,3vw,2.8rem)] mt-16 mb-4 px-4">
        Popular Posts
      </h2>

      <div className="w-full pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {currentStories.map(story => (
          <Link to={`/blog/${story.id}`} className="block text-decoration-none p-2" key={story.id}>
            <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
              <img
                src={story.image || '/default-image.jpg'}
                alt={story.title || 'Blog image'}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-orange-500 text-sm font-semibold mt-2">
              {story.publisher || 'Unknown Publisher'} - {story.posteddate || 'Unknown Date'}
            </div>
            <div className="text-lg font-semibold text-[#3D3D3D]">
              {truncateText(story.title || 'Untitled', 30)}
            </div>
            <p className="text-[#3D3D3D] text-sm">
              {truncateText(story.intro || 'No introduction available', 150)}
            </p>
            <div className="text-orange-500 underline">Read More...</div>
          </Link>
        ))}
      </div>

      <div className="mt-12 px-4 flex justify-center">
        <Pagination
          count={Math.ceil(popularStories.length / itemsPerPage)}
          page={currentPage}
          onChange={(e, page) => setCurrentPage(page)}
          variant="outlined"
          shape="circular"
        />
      </div>
    </div>
  );
};

export default PopularPosts;
