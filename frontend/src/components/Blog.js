import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FiArrowRight } from 'react-icons/fi';
import { LuClock8 } from 'react-icons/lu';
import { stories } from "./blogdata";
import PopularPosts from "./PopularPosts";
import SuscribeNewsletter from "./SubscribeNewsletter";
import Popupnewsletter from "./popupnewsletter";
import { FaTwitter } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import parse from 'html-react-parser';

export default function Blog() {
    const { id } = useParams();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [like, setLike] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [currentBlog, setCurrentBlog] = useState(null);

    useEffect(() => {
        const fetchLikes = async () => {
            setIsLiked(localStorage.getItem(`isLiked-${id}`) === "true");
            const response = await fetch(`/api/blogs/${id}/likes`);
            const data = await response.json();
            setLike(data.likes);
        };
        fetchLikes();
    }, [id]);

    const updateLike = async () => {
        const newLikeCount = isLiked ? like - 1 : like + 1;
        setLike(newLikeCount);
        setIsLiked(!isLiked);
        localStorage.setItem(`isLiked-${id}`, !isLiked);

        await fetch(`/api/blogs/${id}/like`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ like: newLikeCount })
        });
    };

    useEffect(() => {
        const result = stories.find((item) => item.id === parseInt(id));
        if (result) {
            setCurrentBlog(result);
        }
    }, [id]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollThreshold = 1000;
            if (window.scrollY >= scrollThreshold) {
                setIsPopupOpen(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!currentBlog) {
        return null;
    }

    const currentPageUrl = window.location.href;

    return (
        <div className="card bg-base-100 p-4">
            <div className="flex justify-between text-gray-700 font-medium text-base">
                <div className="flex items-center">
                    <div>Blog</div>
                    <div className="px-1">
                        <FiArrowRight size={20} />
                    </div>
                    <div>{currentBlog?.title}</div>
                </div>
            </div>
            <figure>
                <img className="w-full h-full object-cover rounded-2xl" src={currentBlog.image} alt="blog images" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{currentBlog.title}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-5 text-[#fd7a33] justify-center">
                        <div className="text-left font-sans text-base">
                            {currentBlog?.publisher}
                        </div>
                        <div className="flex items-center">
                            <LuClock8 className="mr-1" />
                            <span className="flex text-base">
                                <span className="mr-1">2</span>
                                <span>minute read</span>
                            </span>
                        </div>
                    </div>
                    <div className="likesection ml-auto" onClick={updateLike} style={{ cursor: "pointer", display: 'flex', alignItems: 'center' }}>
                        {isLiked ? (
                            <AiFillHeart size={24} color="red" />
                        ) : (
                            <AiOutlineHeart size={24} color="red" />
                        )}
                        <div className="likecounts ml-2">{like} Likes</div>
                    </div>
                </div>
                <p className="mt-4 text-base text-gray-700">{parse(currentBlog.intro)}</p>
                <div className="my-4">
                    <p className="text-gray-600">{parse(currentBlog.paraone)}</p>
                    <p className="text-gray-600">{parse(currentBlog.paratwo)}</p>
                    <p className="text-gray-600">{parse(currentBlog.parathree)}</p>
                </div>
            </div>
            <div className="my-8">
                <PopularPosts />
            </div>
            <div className="fixed top-1/2 right-0 flex flex-col items-center bg-white rounded-l-lg z-80 space-y-2">
                <div className="text-gray-700 text-left font-semibold text-sm mb-2 pl-1">
                    Share
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center m-2 cursor-pointer">
                    <FaTwitter className="w-5 h-5 text-blue-600" />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center m-2 cursor-pointer">
                    <BsFacebook className="w-5 h-5 text-blue-700" />
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center m-2 cursor-pointer">
                    <IoLogoWhatsapp className="w-5 h-5 text-green-500" />
                </div>
            </div>
            <div>
                <SuscribeNewsletter />
            </div>
            {isPopupOpen && <Popupnewsletter />}
        </div>
    );
}
