import * as React from 'react';
import loadable, { LoadableComponent, Options } from '@loadable/component';

import IRouteConfig from './IRouteConfig';
import Spinner from '../components/Spinner/Spinner';
import DefaultLayout from '../layouts/DefaultLayout';

import HomePage from '../components/pages/HomePage/HomePage';

const AsyncLazyPage: LoadableComponent<any> = loadable(() => import('../components/pages/LazyPage/LazyPage'), {
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
];

export default routesConfig;
