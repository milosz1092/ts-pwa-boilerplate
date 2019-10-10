import {
    connectRouter, go, goBack, goForward,
    push, replace, RouterState
  } from 'connected-react-router';

import testReducer, { ITestReducerState } from './test.reducer';

export interface IGlobalState {
    router: RouterState,
    test: ITestReducerState,
}

const rootReducer = combineReducers({
    test: testReducer,
});


export default (history: History) => combineReducers<ApplicationState>({
    router: connectRouter(history),
    test: testReducer,
});

https://github.com/supasate/connected-react-router/issues/195
