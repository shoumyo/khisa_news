import React, { Suspense } from 'react';
import Categories from '../Categories/Categories';

const LeftAsset = () => {
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAsset;