import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { store } from "./data/Store";
import { Provider } from "react-redux";
import { mapDispatchToProps, mapStateToProps } from './data/Connection';
import { connect } from "react-redux";


const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp />
    </Provider>        
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
