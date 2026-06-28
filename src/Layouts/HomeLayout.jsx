import React from 'react';
import { Outlet } from 'react-router';
import Header from '../Components/Header';
import LatestNews from '../Components/LatestNews';
import NavBar from '../Components/NavBar';
import LeftAsset from '../Components/HomeLayout/LeftAsset';
import RightAsset from '../Components/HomeLayout/RightAsset';
import { useNavigation } from 'react-router';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state}=useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <LeftAsset></LeftAsset>
                </aside>
                <section className='main col-span-6'>
                   {state=="loading"? <Loading></Loading> :<Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'>
                    <RightAsset></RightAsset>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;