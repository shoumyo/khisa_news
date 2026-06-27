import React from 'react';
import { FaBookmark, FaShareAlt, FaStar, FaEye } from 'react-icons/fa';

const NewsCard = ({ news }) => {
    const { title, image_url, details, author, rating, total_view } = news;

    return (
        <div className="card bg-white border border-gray-200 rounded-lg shadow-sm mb-6 overflow-hidden">
            {/* 1. Author Header Section */}
            <div className="flex items-center justify-between bg-gray-50 p-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                    <img 
                        src={author?.img} 
                        alt={author?.name} 
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-semibold text-gray-800 text-sm">{author?.name}</h4>
                        <p className="text-xs text-gray-500">
                            {author?.published_date ? new Date(author.published_date).toISOString().split('T')[0] : 'No Date'}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-gray-500">
                    <button className="hover:text-primary transition-colors">
                        <FaBookmark />
                    </button>
                    <button className="hover:text-primary transition-colors">
                        <FaShareAlt />
                    </button>
                </div>
            </div>

            {/* 2. Main News Content Container */}
            <div className="p-5">
                {/* News Title */}
                <h2 className="font-bold text-xl text-gray-900 mb-4 leading-snug hover:text-primary cursor-pointer">
                    {title}
                </h2>

                {/* News Image */}
                <div className="w-full mb-4">
                    <img 
                        src={image_url} 
                        alt={title} 
                        className="w-full max-h-[400px] object-cover rounded-md"
                    />
                </div>

                {/* News Details Paragraph */}
                <p className="text-sm text-gray-600 leading-relaxed">
                    {details.length > 250 ? (
                        <>
                            {details.slice(0, 250)}...{' '}
                            <span className="text-orange-500 font-semibold cursor-pointer hover:underline block mt-1">
                                Read More
                            </span>
                        </>
                    ) : (
                        details
                    )}
                </p>

                {/* Divider Line */}
                <hr className="my-4 border-gray-200" />

                {/* 3. Card Footer (Ratings and Views) */}
                <div className="flex items-center justify-between pt-1">
                    {/* Stars and Rating Value */}
                    <div className="flex items-center gap-1.5">
                        <div className="flex text-orange-400 gap-0.5">
                            {/* Renders 5 stars structurally like the UI mockup */}
                            {[...Array(5)].map((_, i) => (
                                <FaStar key={i} className={i < Math.round(rating?.number || 0) ? "text-orange-400" : "text-gray-200"} />
                            ))}
                        </div>
                        <span className="text-sm font-medium text-gray-600 ml-1">
                            {rating?.number || "0.0"}
                        </span>
                    </div>

                    {/* View Count */}
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <FaEye className="text-base" />
                        <span className="font-medium text-gray-600">{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;