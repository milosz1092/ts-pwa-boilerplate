import * as React from 'react';
import { render } from 'react-dom';
import * as ServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import StoreProvider, { history } from './StoreProvider';

import App from './components/App';

const store = StoreProvider.getStore();

const bootstrap = () => render(
    <Provider store={store}>
        <App history={history} />
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
