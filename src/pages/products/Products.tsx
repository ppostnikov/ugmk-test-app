import React, { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Products } from "src/modules/products/presentation";
import ErrorFallback from "src/components/error/ErrorFallback";

const ProductsPage: FC = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Products/>
        </ErrorBoundary>
    )
}

export default ProductsPage;