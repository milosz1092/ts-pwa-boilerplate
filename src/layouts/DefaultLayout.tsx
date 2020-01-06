import * as React from 'react';
import { Route } from 'react-router-dom';
import { DefaultLayoutWrapper } from './DefaultLayout.sc';

import ILayoutProps from './ILayoutProps';
import Menu from '../components/Menu/Menu';

export default class DefaultLayout extends React.PureComponent<ILayoutProps> {
    render() {
        const { component: Component, props, ...rest } = this.props;

        return (
            <Route {...rest} render={matchProps => (
                <DefaultLayoutWrapper>
                    {/* <Menu /> */}
                    <Component {...matchProps} {...props} />
                </DefaultLayoutWrapper>
            )} />
        );
    }
}
