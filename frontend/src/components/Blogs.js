import React, { useEffect } from 'react';
import Blogc1 from './Blogc1'; 
import RecentPosts from './RecentPosts';
import SuscribeNewsletter from './SubscribeNewsletter';
import { stories } from './blogdata';

export default function Blogs() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener('beforeunload', scrollToTop);
    return () => {
      window.removeEventListener('beforeunload', scrollToTop);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-6xl">    
        <Blogc1 stories={stories} />
      </div>
      <div className="w-full max-w-6xl mt-8">
        <RecentPosts stories={stories} />
      </div>
      <div className="w-full max-w-6xl mt-8">
        <SuscribeNewsletter />
      </div>
    </div>
  );
}
