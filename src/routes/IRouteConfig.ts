import * as React from "react";

export default interface IRouteConfig {
    path: string,
    exact: boolean,
    layout: React.ComponentClass<any>,
    component: React.ComponentClass,
    title: string,
    secure?: {
        isAuthenticated: boolean,
        isAdmin?: boolean,
        redirectTo?: string,
    },
    location?: {
        pathname: string,
    },
    children?: IRouteConfig[],
};
