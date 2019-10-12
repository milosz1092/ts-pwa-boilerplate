import * as React from 'react';
import { LazyPageWrapper } from './LazyPage.sc';

interface IProps {};
interface IDispatch {};
interface IState {};

class LazyPage extends React.PureComponent<IProps & IDispatch, IState> {
    render() {
        return (
            <LazyPageWrapper>
                Lazy page works!
            </LazyPageWrapper>
        );
    }
}

export default LazyPage;
