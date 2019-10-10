import { combineReducers } from 'redux';
import { History } from 'history';
import { RouterState, connectRouter } from 'connected-react-router';

import testReducer, { ITestReducerState } from './test.reducer';

export interface IGlobalState {
    router: RouterState,
    test: ITestReducerState,
}

const rootReducer = (history: History) => combineReducers({
    test: testReducer,
    router: connectRouter(history)
})

export default rootReducer;
