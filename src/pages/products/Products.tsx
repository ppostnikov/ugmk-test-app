import React from "react";

import { Products } from "../../modules/products/presentation";
import ErrorBoundary from "../../components/error/ErrorBoundary";

const ProductsPage: React.FC = () => {
    return (
        <ErrorBoundary>
            <Products/>
        </ErrorBoundary>
    )
}

export default ProductsPage;