import React from 'react';
import { Link } from 'react-router-dom';

const stripHtmlAndTruncate = (html, maxLength) => {
    let text = html.replace(/<[^>]+>/g, '');
    
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + '...';
    }
    return text;
};

const Blogc1 = ({ stories }) => {
  return (
    <div className="p-4">
      <title>Blog page</title>
      <div className="text-center mb-6">
        <div className="text-32px leading-30px font-normal relative">
          <span className="text-[#f76f32] font-gilroy-bold">FROKER </span>
          <span className="text-[#3d3d3d] font-gilroy-medium">BLOG</span>
        </div>
        <div className="text-24px text-[#3d3d3d] font-gilroy-bold max-w-2xl mx-auto mt-8 text-center">
          Articles covering the most recent <br />updates and advancements
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {/* Large Article */}
        <div className="flex-1 lg:w-2/3">
          {stories.slice(13, 14).map((story, index) => (
            <Link to={`/blog/${story.id}`} className="block mb-4" key={index}>
              <div className="rounded-lg overflow-hidden ">
                <img src={story.image} alt="pic of blogs" className="w-full h-80 object-cover rounded-lg" />
                <div className="p-4">
                  <div className="text-sm text-orange-500 mb-1">{story.publisher} - {story.posteddate}</div>
                  <div className="text-xl font-gilroy-bold mb-2">{stripHtmlAndTruncate(story.title, 30)}</div>
                  <p className="text-gray-700 mb-4">{stripHtmlAndTruncate(story.intro, 80)}</p>
                  <div className="text-orange-500 underline">Read More...</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* Side Articles */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          {stories.slice(11, 13).map((story, index) => (
            <Link to={`/blog/${story.id}`} className="block mb-4" key={index}>
              <div className="flex rounded-lg overflow-hidden ">
                <img src={story.image} alt="pic of blogs" className="w-32 h-32 object-cover rounded-lg" />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="text-sm text-orange-500 mb-1">{story.publisher} - {story.posteddate}</div>
                    <div className="text-lg font-gilroy-bold mb-2">{stripHtmlAndTruncate(story.title, 30)}</div>
                    <p className="text-gray-700">{stripHtmlAndTruncate(story.intro, 50)}</p>
                  </div>
                  <div className="text-orange-500 underline mt-2">Read More...</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogc1;
