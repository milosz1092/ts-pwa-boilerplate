import * as React from 'react';
import * as Loadable from 'react-loadable';

import IRouteConfig from './IRouteConfig';
import Spinner from '../components/Spinner/Spinner';
import DefaultLayout from '../layouts/DefaultLayout';

import HomePage from '../components/pages/HomePage/HomePage';

// const AsyncLazyPage = Loadable({
//     loader: () => import(/* webpackChunkName: "LazyPage" */ '../components/pages/LazyPage/LazyPage'),
//     loading: Spinner,
// });

const routesConfig: IRouteConfig[] = [
    {
        path: '/',
        exact: true,
        layout: DefaultLayout,
        component: HomePage,
        title: 'Home',
    },
    // {
    //     path: '/lazy',
    //     exact: true,
    //     layout: DefaultLayout,
    //     component: AsyncLazyPage,
    //     title: 'Lazy',
    // },
];

export default routesConfig;
