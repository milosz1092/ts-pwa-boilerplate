import * as React from "react";
import * as Loadable from 'react-loadable';

export default interface IRouteConfig {
    path: string,
    exact: boolean,
    layout: React.ComponentClass<any>,
    component: React.ComponentClass | Loadable.LoadableComponent,
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
