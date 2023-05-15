import React, { FC } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Details } from "src/modules/details/presentation";
import ErrorFallback from "src/components/error/ErrorFallback";

const FactoryDetailsPage: FC = () => {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Details/>
        </ErrorBoundary>
    )
};

export default FactoryDetailsPage;