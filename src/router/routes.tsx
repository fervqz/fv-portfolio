import ErrorPage from "../screens/ErrorPage/ErrorPage";
import Paths from "../consts/paths";
import { AppRoute } from "../types/types";
import HomePage from "../screens/HomePage/HomePage";
import Projects from "../screens/Projects/Projects";

let routes: AppRoute[] = [
    {
        path: Paths.WILDCARD,
        element: <ErrorPage />,
    },
    {
        path: Paths.HOME,
        element: <HomePage />,
        title: 'Home',
        addToNavBar: true,
    },
    {
        path: Paths.PROJECTS,
        element: <Projects />,
        title: 'Projects',
        addToNavBar: true,
    },
];

routes = routes.map((route: AppRoute) => {
    return { ...route, errorElement: <ErrorPage /> };
});

export default routes;