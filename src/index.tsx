import * as React from 'react';
import { render } from 'react-dom';
import * as ServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import StoreProvider, { history } from './StoreProvider';

import App from './components/App';

const store = StoreProvider.getStore();

render(
    <Provider store={store}>
        <App history={history} />
    </Provider>,
    document.getElementById("app")
);

ServiceWorker.register();
