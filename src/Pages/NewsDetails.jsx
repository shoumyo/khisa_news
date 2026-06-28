import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RightAsset from '../Components/HomeLayout/RightAsset';
import NewsDeailsCard from '../Components/NewsDeailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data=useLoaderData();
    const [news,setNews]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        const newsDetails=data.find(singleNews=>singleNews.id===id);
        setNews(newsDetails);
    },[data,id]);
    return (
      <div>
        <header className="py-3">
          <Header></Header>
        </header>
        <main className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-10">
          <section className="col-span-9">
            <h2 className="font-bold mb-5">News Details</h2>
            <NewsDeailsCard news={news}></NewsDeailsCard>
          </section>
          <aside className="col-span-3">
            <RightAsset></RightAsset>
          </aside>
        </main>
      </div>
    );
};

export default NewsDetails;