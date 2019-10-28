import * as React from 'react';
import loadable, { LoadableComponent } from '@loadable/component';

import IRouteConfig from './IRouteConfig';
import Spinner from '../components/Spinner/Spinner';
import DefaultLayout from '../layouts/DefaultLayout';

import HomePage from '../pages/HomePage/HomePage';

const AsyncLazyPage: LoadableComponent<any> = loadable(() => import('../pages/LazyPage/LazyPage'), {
    fallback: (<Spinner />),
});

const routesConfig: IRouteConfig[] = [
    {
        path: '/',
        exact: true,
        layout: DefaultLayout,
        component: HomePage,
        title: 'Home',
    },
    {
        path: '/lazy',
        exact: true,
        layout: DefaultLayout,
        component: AsyncLazyPage,
        title: 'Lazy',
    },
    {
        path: '/lazy/:id',
        exact: true,
        layout: DefaultLayout,
        component: AsyncLazyPage,
        title: 'Lazy with parameter',
    },
];

export default routesConfig;
