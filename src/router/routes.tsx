import ScreenError from "../screens/ScreenError/ScreenError";
import ScreenShowcase from "../screens/ScreenShowcase/ScreenShowcase";
import ScreenMap from "../screens/ScreenMap/ScreenMap";
import Paths from "./paths";
import ScreenLoaders from "../screens/ScreenLoaders/ScreenLoaders";
import { AppRoute } from "../types";

let routes: AppRoute[] = [
    {
        path: Paths.WILDCARD,
        element: <ScreenShowcase />,
    },
    {
        path: Paths.HOME,
        element: <ScreenShowcase />,
        title: 'Home',
    },
    {
        path: Paths.SHOWCASE,
        element: <ScreenShowcase />,
        title: 'Showcase',
    },
    {
        path: Paths.LOADERS,
        element: <ScreenLoaders />,
        title: 'Loaders',
    },
    {
        path: Paths.MAP,
        element: <ScreenMap />,
        title: 'Map',
    },
];

routes = routes.map((route: AppRoute) => {
    return { ...route, errorElement: <ScreenError /> };
});

export default routes;