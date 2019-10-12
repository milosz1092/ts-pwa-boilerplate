import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router'
import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

class StoreProvider {
    private static _instance: Store;

    private configureStore() {
        let composeEnhancer: typeof compose;
    
        if (process.env.NODE_ENV != 'production') {
            composeEnhancer = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        } else {
            composeEnhancer = compose;
        }
        
        const store: Store = createStore(
            rootReducer(history),
            undefined,
            composeEnhancer(
                middleware,
            ),
        );
        StoreProvider._instance = store;

        sagaMiddleware.run(rootSaga);
    }

    public getStore() {
        if (!StoreProvider._instance) {
            this.configureStore();
        }

        return StoreProvider._instance;
    }
}

export default new StoreProvider();
