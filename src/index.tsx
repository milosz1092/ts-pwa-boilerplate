import * as React from 'react';
import { render } from 'react-dom';
import * as ServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, Store } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';

import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

import App from './components/App';
import { any } from 'prop-types';

ServiceWorker.register();

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

let compose = null;

if (process.env.NODE_ENV != 'production') {
    compose = createStore(connectRouter(history)(null, null), {}, composeWithDevTools(
        middleware,
    ));
} else {
    compose = createStore(connectRouter(history)(rootReducer, null), middleware);
}

export const store: Store = compose;

sagaMiddleware.run(rootSaga);

var mountNode = document.getElementById("app");
render(
    <Provider store={store}>
        <App history={history} name="Miłosz" />
    </Provider>,
    mountNode
);











// function api<T>(url: string): Promise<T> {
//     return fetch(url).then(response => {
//         if (!response.ok) {
//             throw new Error(response.statusText)
//         }
//         return response.json()
//     });
// }

// api<any[]>('https://jsonplaceholder.typicode.com/users')
//     .then((respBody) => {
//         const data = respBody.map(entry => {
//             return entry.name;
//         });

//         var mountNode = document.getElementById("app");
//         ReactDOM.render(<App data={data} name="Miłosz" />, mountNode);
//     })
//     .catch(error => {
//         /* show error message */
//     })
