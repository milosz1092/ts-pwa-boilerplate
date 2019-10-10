import IRouteConfig from './IRouteConfig';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../components/Home/Home';

const routesConfig: IRouteConfig[] = [
    {
        path: '/',
        exact: true,
        layout: DefaultLayout,
        component: Home,
        title: 'Home',
    }
];

export default routesConfig;
