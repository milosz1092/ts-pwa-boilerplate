import * as React from 'react';
import { HomePageWrapper } from './HomePage.sc';

import WebWorker from "./workerSetup";
import worker from "./worker";

interface IProps {};
interface IDispatch {};
interface IState {
    minRange: number | undefined,
    maxRange: number | undefined,
    result: number | undefined,
    [key: string]: number | undefined,
};

class HomePage extends React.PureComponent<IProps & IDispatch, IState> {
    prime_worker: WebWorker;

    constructor(props: IProps) {
        super(props);

        this.state = {
            minRange: 1,
            maxRange: 100000,
            result: undefined,
        }

        this.prime_worker = new WebWorker(worker);
    }

    componentDidMount() {
        (this.prime_worker as Worker).addEventListener("message", event => {
            console.log('Computed data from worker: ', event.data);
            this.setState({
                result: event.data,
            });
        });

    }

    handleChange = (event: React.ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        this.setState({
            [target.name]: parseInt(target.value, 10),
        })
    }

    computePrimeNumbers = () => {
        const { minRange, maxRange } = this.state;

        (this.prime_worker as Worker).postMessage({ minRange, maxRange });
    }

    render() {
        return (
            <HomePageWrapper>
                <h2>Pure JS implementation</h2>
                <h3>Prime numbers</h3>
                <label>from: </label>
                <input
                    name="minRange"
                    placeholder="first from range"
                    type="number"
                    value={this.state.minRange as number}
                    onChange={this.handleChange}
                />

                <label>to: </label>
                <input
                    name="maxRange"
                    placeholder="last from range"
                    type="number"
                    value={this.state.maxRange as number}
                    onChange={this.handleChange}
                />

                <button onClick={this.computePrimeNumbers}>compute</button>
            </HomePageWrapper>
        );
    }
}

export default HomePage;
