import { createBrowserRouter } from "react-router-dom";

import NotFound from "../pages/notFound/NotFound";
import ProductsPage from "../pages/products/Products";
import FactoryDetailsPage from "../pages/details/FactoeyDetails";

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