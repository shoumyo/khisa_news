import { useMemo } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../NewsCard';

const Category = () => {
    const { id } = useParams();
    const data = useLoaderData();

    const categoryNews = useMemo(() => {
        if (!Array.isArray(data)) return [];
        if (id === '0') return data;
        if (id === '1') return data.filter((news) => news.others?.is_today_pick === true);
        return data.filter((news) => String(news.category_id) === id);
    }, [data, id]);

    return (
        <div>
            <h2 className='font-bold mb-5'>
                Total <span className='text-secondary'>{categoryNews.length}</span> news
            </h2>
            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};
export default Category;