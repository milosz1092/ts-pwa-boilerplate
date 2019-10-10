import * as React from 'react';
import { render } from 'react-dom';
import * as ServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import configureStore, { history } from './configureStore';

import App from './components/App';

const store = configureStore();

const bootstrap = () => render(
    <Provider store={store}>
        <App history={history} name="Miłosz" />
    </Provider>,
    document.getElementById("app")
);

bootstrap();
ServiceWorker.register();









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
