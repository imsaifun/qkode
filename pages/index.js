import { ResourcePicker } from "@shopify/app-bridge-react";
import { EmptyState, Page } from "@shopify/polaris";
import { useState } from "react";
import ProductList from "../components/ProductList";

const index = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [products, setProducts] = useState([])

    // console.log(products);

    const handleProductSelection = (payload) => {
        setIsOpen(false)
        setProducts(payload.selection)
    }

    return (
        <>
            <ResourcePicker
                resourceType="Product"
                open={isOpen}
                onCancel={() => setIsOpen(false)}
                onSelection={handleProductSelection} />
            {products.length > 0 ?
                <Page
                    title="Product Selector"
                    primaryAction={
                        {
                            content: "Select product",
                            onAction: () => setIsOpen(true)
                        }
                    }
                >
                    <ProductList products={products} />
                </Page> : <EmptyState
                    heading="Manage the products you want to display"
                    action={{
                        content: "Select products",
                        onAction: () => setIsOpen(true),
                    }}
                    image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"

                >
                    <p>Select the products you want to use on your banner</p>
                </EmptyState>}
        </>
    );
};

export default index;
