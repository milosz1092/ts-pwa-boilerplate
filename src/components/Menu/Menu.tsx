import * as React from 'react';
import { NavLink } from "react-router-dom";

import { MenuWrapper } from './Menu.sc';

interface IProps {};
interface IDispatch {};
interface IState {};

export default class Menu extends React.PureComponent<IProps & IDispatch, IState> {
    render() {
        return (
            <MenuWrapper>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="link-selected">
                            <span>Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink exact to="/lazy" activeClassName="link-selected">
                            <span>Lazy</span>
                        </NavLink>
                    </li>
                </ul>
            </MenuWrapper>
        );
    }
}
