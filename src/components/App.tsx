import * as React from 'react';
import { History } from 'history';

interface Props {
    history: History,
    name: string,
    data?: string[],
}

class App extends React.PureComponent<Props> {
    render() {
        return (
            <div>
                Hello {this.props.name}
                {/* <div>{this.props.data.join(', ')}</div> */}
            </div>
        );
    }
}

export default App;
