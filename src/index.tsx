import * as React from 'react';
import * as ReactDOM from "react-dom";
import * as ServiceWorker from './registerServiceWorker';

function api<T>(url: string): Promise<T> {
    return fetch(url).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText)
        }
        return response.json()
    });
}

ServiceWorker.register();

interface Props {
    name: string,
    data: string[],
}

class App extends React.Component<Props> {
    render() {
        const requests = [];
        console.log(this.props.data);

        setTimeout(() => {
            window.caches.keys().then(keys => {
                console.log(keys)
                keys.forEach(key => {
                    window.caches.open(key).then(cache => {
                        cache.keys().then(keys => {
                            console.log(keys);
                        });
                    });
                });
            });

        }, 2000);


        return <div>Hello {this.props.name}<div>{this.props.data.join(', ')}</div></div>;
    }
}

api<any[]>('https://jsonplaceholder.typicode.com/users')
  .then((respBody) => {
    const data = respBody.map(entry => {
        return entry.name;
    });

    var mountNode = document.getElementById("app");
    ReactDOM.render(<App data={data} name="Miłosz" />, mountNode);
  })
  .catch(error => {
    /* show error message */
})


