import PushNotification from "react-native-push-notification";

export const sendPaymentNotification = (title, message)=>{
    PushNotification.localNotification({
        channelId : 'payment-notification', 
        title, 
        message
    })
}

export const sendPaymentNotificationSchedule = (title, message)=>{
    PushNotification.localNotification({
        channelId : 'payment-notification',
        title, 
        message
    })
}

export const localNotification = (title, message)=>{
    PushNotification.localNotification({
        channelId : 'local-notification', 
        title, 
        message
    })
}