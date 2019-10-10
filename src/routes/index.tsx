import * as React from 'react'
import { Switch } from 'react-router-dom'

import routesConfig from './config';
import Route from './Route';

import IRouteConfig from './IRouteConfig';

const allRoutes: JSX.Element[] = [];

const generateRoutes = (config: IRouteConfig[], parentPath: string = ''): void => {
    config.map((route) => {
        allRoutes.push(
            (
                <Route
                    title={route.title}
                    key={`${parentPath}${route.path}`}
                    layout={route.layout}
                    exact={route.exact}
                    path={`${parentPath}${route.path}`}
                    secure={route.secure}
                    component={route.component}
                />
            )
        );
        if(route.children) {
            generateRoutes(route.children, route.path);
        }
    })
}

generateRoutes(routesConfig);

const routes = (
    <Switch>
        {...allRoutes}
    </Switch>
);

export default routes
