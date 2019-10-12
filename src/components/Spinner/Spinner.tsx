import * as React from 'react';
import SpinnerSvg from '../../../assets/images/spinner.svg'; 
import SVG from 'react-inlinesvg';

import { SpinnerWrapper } from './Spinner.sc';

interface IProps {};
interface IDispatch {};
interface IState {
    isVisible: boolean;
};

class Spinner extends React.PureComponent<IProps & IDispatch, IState> {
    private _isMounted = false;
    private _timeout: number | null;

    constructor(props: IProps) {
        super(props);

        this.state = {
            isVisible: false,
        };

        this._timeout = null;
    }

    makeSpinnerVisible = () => {
        if(this._isMounted) {
            this.setState({
                isVisible: true,
            })
        }

        clearTimeout(this._timeout as number);
        this._timeout = null;
    };

    componentDidMount() {
        this._isMounted = true;
        this._timeout = setTimeout(this.makeSpinnerVisible, 500);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        const { isVisible } = this.state;

        return isVisible && (
            <SpinnerWrapper>
                <SVG src={SpinnerSvg} />
            </SpinnerWrapper>
        );
    }
}

export default Spinner;
