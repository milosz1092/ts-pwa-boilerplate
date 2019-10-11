import * as React from "react";
import { LoadableComponent } from '@loadable/component';

export default interface IRouteConfig {
    path: string,
    exact: boolean,
    layout: React.ComponentClass<any>,
    component: React.ComponentClass | LoadableComponent<any>,
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
