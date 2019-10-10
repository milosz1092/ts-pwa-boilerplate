import * as React from 'react';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import routes from '../routes';

interface Props {
    history: History,
}

class App extends React.PureComponent<Props> {
    render() {
        return (
            <ConnectedRouter history={this.props.history}>
                { routes }
            </ConnectedRouter>
        );
    }
}

export default App;
