import * as React from 'react';
import { LazyPageWrapper } from './LazyPage.sc';

interface IProps {
    match: {
        params: {
            id: string;
        }
    };
};
interface IDispatch {};
interface IState {};

class LazyPage extends React.PureComponent<IProps & IDispatch, IState> {
    render() {
        const { id } = this.props.match.params;

        return (
            <LazyPageWrapper>
                <p>Lazy page works!</p>
                {
                    id && <p>id: {id}</p>
                }
                
            </LazyPageWrapper>
        );
    }
}

export default LazyPage;
