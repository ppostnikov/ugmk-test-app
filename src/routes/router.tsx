import { createBrowserRouter } from "react-router-dom";

import NotFound from "src/pages/notFound/NotFound";
import ProductsPage from "src/pages/products/Products";
import FactoryDetailsPage from "src/pages/details/FactoryDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <ProductsPage />,
    },
    {
        path: '/details/:factoryId/:month',
        element: <FactoryDetailsPage />,
    },
    {
        path: `*`,
        element: <NotFound />
    },
]);