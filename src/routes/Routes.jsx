import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/error/Error";
import Home from "../pages/Home/Home";
import SingleProduct from "../pages/singleProduct/SingleProduct";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/product/:id",
                element: <SingleProduct />,
                loader: ({ params }) => fetch(`/${params.id}`),
            }
        ]
    },
]);

export default router;