/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import { store } from './src/redux/store';
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist';
import {PersistGate} from "redux-persist/integration/react"

let persistore = persistStore(store)

const AppWithRouter = ()=>(
    <Provider store={store}>
        <PersistGate persistor={persistore}>
            <App/>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithRouter);
