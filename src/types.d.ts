import { PathRouteProps } from "react-router-dom";

export interface AppRoute extends PathRouteProps {
    title?: string;
}