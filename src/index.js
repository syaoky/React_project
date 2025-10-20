import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/reduxStore";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = () => {
    console.log(store.getState())

    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App/>
            </Provider>

        </React.StrictMode>
    );
}

rerenderTree()




// If you want to start measuring performance in your app, pass a function store.subscribe(rerenderTree)
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
