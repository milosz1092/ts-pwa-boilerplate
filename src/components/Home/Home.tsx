import * as React from 'react';
import { HomeWrapper } from './Home.sc';

interface IProps {};
interface IDispatch {};
interface IState {};

class Home extends React.PureComponent<IProps & IDispatch, IState> {
    render() {
        return (
            <HomeWrapper>
                Home page works!
            </HomeWrapper>
        );
    }
}

export default Home;
