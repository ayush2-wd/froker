import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/custom.css";

const stripHtmlAndTruncate = (html, maxLength) => {
    let text = html.replace(/<[^>]+>/g, '');
    
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + '...';
    }
    return text;
};

const RecentPosts = ({ stories }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    if (!stories) {
        return <div>Loading...</div>;
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentStories = stories.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <div className="p-4">
            <h2 className="text-dark-gray text-left font-gilroyBold text-[clamp(40px,6vw,44px)] font-normal mt-4rem pb-1rem">
                Recent Posts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentStories.map((story, index) => (
                    <Link to={`/blog/${story.id}`} className="block p-4  rounded-lg " key={index}>
                        <div className="flex flex-col">
                            <img src={story.image} alt="pic of blogs" className="w-full h-60 object-cover mb-4 rounded-lg" />
                            <div className="text-sm text-orange-500 mb-1">{story.publisher} - {story.posteddate}</div>
                            <div className="text-xl font-bold mb-2 truncate">{stripHtmlAndTruncate(story.title, 30)}</div>
                            <p className="text-gray-700 mb-4">{stripHtmlAndTruncate(story.intro, 80)}</p>
                            <div className="text-orange-500 underline">Read More...</div>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="mt-12 px-4 flex justify-center">
                <Pagination
                    count={Math.ceil(stories.length / itemsPerPage)}
                    page={currentPage}
                    onChange={(e, page) => setCurrentPage(page)}
                    variant="outlined"
                    shape="circular"
                />
            </div>
        </div>
    );
};

export default RecentPosts;
