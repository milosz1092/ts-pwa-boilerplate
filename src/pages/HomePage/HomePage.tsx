import * as React from 'react';
import { HomePageWrapper } from './HomePage.sc';

interface IProps {};
interface IDispatch {};
interface IState {};

class HomePage extends React.PureComponent<IProps & IDispatch, IState> {
    render() {
        return (
            <HomePageWrapper>
                Home page works!
            </HomePageWrapper>
        );
    }
}

export default HomePage;
