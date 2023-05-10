import React from "react";

import { Details } from "../../modules/details/presentation";
import ErrorBoundary from "../../components/error/ErrorBoundary";

const FactoryDetailsPage: React.FC = () => {
    return (
        <ErrorBoundary>
            <Details/>
        </ErrorBoundary>
    )
};

export default FactoryDetailsPage;