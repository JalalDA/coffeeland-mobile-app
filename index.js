/**
 * @format
 */
import React from 'react';
import {AppRegistry, Platform} from 'react-native';
import App from './src';
import {name as appName} from './app.json';
import { store } from './src/redux/store';
import {Provider} from 'react-redux'
import {persistStore} from 'redux-persist';
import {PersistGate} from "redux-persist/integration/react"
import PushNotification from 'react-native-push-notification'
import {sendPaymentNotification, localNotification} from './src/helpers/Notification'

PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },
  
    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);
      // sendPaymentNotification(notification.title, notification.message)
      localNotification(notification.title, notification.message)
      // process the notification
  
      // (required) Called when a remote is received or opened, or local notification is opened
    //   notification.finish(PushNotificationIOS.FetchResult.NoData);
    },
  
    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);
  
      // process the action
    },
  
    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function(err) {
      console.error(err.message, err);
    },
  
    // IOS ONLY (optional): default: all - Permissions to register.
    // permissions: {
    //   alert: true,
    //   badge: true,
    //   sound: true,
    // },
  
    // Should the initial notification be popped automatically
    // default: true
    popInitialNotification: true,
  
    /**
     * (optional) default: true
     * - Specified if permissions (ios) and token (android and ios) will requested or not,
     * - if not, you must call PushNotificationsHandler.requestPermissions() later
     * - if you are not using remote notification or do not have Firebase installed, use this:
     *     requestPermissions: Platform.OS === 'ios'
     */
    requestPermissions: true,
  });

PushNotification.createChannel({
    channelId : 'payment-notification', 
    channelName : 'Payment Notification'
}, created => console.log(`Channel is `, created ? "Created" : "Available"))

PushNotification.createChannel({
  channelId : 'local-notification', 
  channelName : 'Local Notification'
}, created => console.log(`Channel is `, created ? "Created" : "Available"))


let persistore = persistStore(store)

const AppWithRouter = ()=>(
    <Provider store={store}>
        <PersistGate persistor={persistore}>
            <App/>
        </PersistGate>
    </Provider>
)

AppRegistry.registerComponent(appName, () => AppWithRouter);
