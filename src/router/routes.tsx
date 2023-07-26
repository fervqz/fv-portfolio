import { RouteProps } from "react-router-dom";
import ScreenError from "../screens/ScreenError/ScreenError";
import ScreenShowcase from "../screens/ScreenShowcase/ScreenShowcase";
import Paths from "./paths";
import ScreenLoaders from "../screens/ScreenLoaders/ScreenLoaders";


let routes: RouteProps[] = [
    {
        path: Paths.WILDCARD,
        element: <ScreenShowcase />,
    },
    {
        path: Paths.SHOWCASE,
        element: <ScreenShowcase />,
    },
    {
        path: Paths.LOADERS,
        element: <ScreenLoaders />,
    },
];

routes = routes.map((route: RouteProps) => {
    return { ...route, errorElement: <ScreenError /> }
});

export default routes;