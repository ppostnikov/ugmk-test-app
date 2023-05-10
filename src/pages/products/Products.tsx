import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Products } from "../../modules/products/presentation";
import ErrorFallback from "../../components/error/ErrorFallback";

const ProductsPage: React.FC = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Products/>
        </ErrorBoundary>
    )
}

export default ProductsPage;