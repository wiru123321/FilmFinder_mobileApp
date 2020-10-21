import { AppRegistry } from 'react-native';
import React from 'react';
import App from './App';
import { name as appName } from './app.json';
import { Provider } from 'react-redux';

import configureStore from "./app/store/store";

const RNRedux = () => (
    <React.StrictMode>
    <Provider store = { configureStore }>
    <App />
    </Provider>
    </React.StrictMode>
)

AppRegistry.registerComponent(appName, () => RNRedux);