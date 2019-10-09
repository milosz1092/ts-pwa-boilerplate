import * as React from 'react';

interface Props {
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
