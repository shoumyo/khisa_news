import React from 'react';
import { Link } from 'react-router';

const NewsDeailsCard = ({news}) => {
    return (
      <div>
        <img className="w-full h-500px] object-cover" src={news.image_url} alt="" />
        <h2 className="text-2xl my-3">{news.title}</h2>
        <p className='my-5'>{news.details}</p>
        <Link className='btn btn-secondary my-5' to={`/category/${news.category_id}`}>All News in this Category</Link>
      </div>
    );
};

export default NewsDeailsCard;