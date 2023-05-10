import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Details } from "../../modules/details/presentation";
import ErrorFallback from "../../components/error/ErrorFallback";

const FactoryDetailsPage: React.FC = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Details/>
        </ErrorBoundary>
    )
};

export default FactoryDetailsPage;