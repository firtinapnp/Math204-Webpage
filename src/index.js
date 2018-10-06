import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";
import thunk from "redux-thunk";

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const myStore = createStoreWithMiddleware(reducers,applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={myStore}>
        <App/>
    </Provider>,
    document.getElementById('root'));


    // If you want your app to work offline and load faster, you can change
    // unregister() to register() below. Note this comes with some pitfalls.
    // Learn more about service workers: http://bit.ly/CRA-PWA
    serviceWorker.unregister();
