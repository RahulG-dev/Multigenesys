import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
// import { legacy_createStore as createStore } from 'redux';
// import {Provider, createStoreHook} from "react-redux"
// import rootReducer from "./Redux/Services/Reducer/index"
// const store = createStore(rootReducer)
// console.warn("Store Data :", store)

// import { Provider } from 'react-redux';
// import store from './ReduxSaga/store';
// console.warn("Store is :", store)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
                <App/>
        // <Provider store={store}>
        // </Provider>
);


