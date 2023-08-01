import ScreenError from "../screens/ScreenError/ScreenError";
import Paths from "./paths";
import { AppRoute } from "../types/types";
import ScreenHome from "../screens/ScreenHome/ScreenHome";

let routes: AppRoute[] = [
    {
        path: Paths.WILDCARD,
        element: <ScreenHome />,
    },
    {
        path: Paths.HOME,
        element: <ScreenHome />,
        title: 'Home',
    },
    {
        path: Paths.ABOUT,
        element: <ScreenHome />,
        title: 'About',
    },
    {
        path: Paths.PROJECTS,
        element: <ScreenHome />,
        title: 'Projects',
    },
    {
        path: Paths.EDUCATION,
        element: <ScreenHome />,
        title: 'Education',
    },
    {
        path: Paths.SKILLS,
        element: <ScreenHome />,
        title: 'Skills',
    },
];

routes = routes.map((route: AppRoute) => {
    return { ...route, errorElement: <ScreenError /> };
});

export default routes;