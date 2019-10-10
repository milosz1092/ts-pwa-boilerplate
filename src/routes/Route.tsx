import * as React from "react";
import { Redirect } from "react-router-dom";

import IRouteConfig from './IRouteConfig';

const Route = ({
    component: Component,
    layout: Layout,
    path,
    secure,
    title,
    ...rest 
}: IRouteConfig) => {
    const redirectPath = secure && secure.redirectTo ? secure.redirectTo : '/login';

    if (/*Auth.canRender(path, storeSnapshot.user_auth)*/true) {
        document.title = `${title} | ${process.env.APP_TITLE}`;
        const props = { title };

        return (
            <Layout path={path} component={Component} props={props} {...rest} />
        );
    } else {
        return (
            <Redirect to={{
                pathname: redirectPath,
                // state: { from: rest.location && rest.location.pathname }
            }} />
        );
    }
} 

export default Route;
