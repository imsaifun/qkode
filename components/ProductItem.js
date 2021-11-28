import { Thumbnail } from '@shopify/polaris';
import React from 'react';

const ProductItem = ({product}) => {
    const image = product.images[0] ? product.images[0]?.originalSrc : null
    return (
        <>
        <Thumbnail source={image}/>
            <div>{product.title}</div>
        </>
    );
};

export default ProductItem;