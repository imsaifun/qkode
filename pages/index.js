import { ResourcePicker } from "@shopify/app-bridge-react";
import { useEffect, useState } from "react";
import ProductEmptyState from "../components/ProductEmptyState";
import ProductPage from "../components/ProductPage";
import store from 'store-js'

const index = ({host}) => {

    const [isOpen, setIsOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [productsId, setProductsId] = useState([])

    useEffect(() => {
       const productList = store.get(`${host}-products`)
       if(productList){
           setProducts(productList)           
       }
    }, [])

    useEffect(() => {
        const ids = products.map(product => {
            return {
                id: product.id
            }
        });
        setProductsId(ids)
    }, [products])
    // console.log(products);

    const handleProductSelection = (payload) => {
        setIsOpen(false)
        setProducts(payload.selection)
        store.set(`${host}-products`, payload.selection)
    }

    return (
        <>
            <ResourcePicker
                resourceType="Product"
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                onSelection={handleProductSelection}
                initialSelectionIds={productsId}
            />
            {products.length > 0 ?
                <ProductPage setIsOpen={setIsOpen} products={products} /> : <ProductEmptyState setIsOpen={setIsOpen} />}
        </>
    );
};

export default index;
