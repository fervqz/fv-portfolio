import { PathRouteProps } from "react-router-dom";

export interface AppRoute extends PathRouteProps {
    title?: string;
    addToNavBar?: boolean;
}

export interface RegisterLocale {
    key: string;
    label: string;
    icon: string;
}