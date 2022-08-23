import { useState, useRef, useEffect } from 'react';
import { APIManager } from '../api/APIManager';
import * as Notifications from 'expo-notifications';
import { Alert, Platform } from 'react-native';
import * as Device from 'expo-device';
import { Subscription } from 'expo-modules-core';

export const useNotifications = () => {

    const [expoToken, setExpoToken] = useState<string | undefined>();
    const [receivedNotification, setReceivedNotification] = useState<Notifications.Notification>();

    const notificationListener = useRef<Subscription>();

    /**
     * A useEffect that runs on the initial render, and subscribes to the notifications events.
     */
    useEffect(() => {
        // Subscribe to notification-received.
        notificationListener.current = Notifications.addNotificationReceivedListener((notification: Notifications.Notification) => {
            setReceivedNotification(notification);
        });

        // Cleanup.
        return () => {
            if (notificationListener && notificationListener.current)
                Notifications.removeNotificationSubscription(notificationListener.current);
        };
    }, []);

    /**
     * A method to request the push-notification's token.
     * @returns 
     */
    const requestToken = async (): Promise<string | undefined> => {
        try {
            const pushToken: string | undefined = await registerForPushNotificationsAsync();
            if (pushToken) {
                setExpoToken(pushToken);
                APIManager.Server.updateExpoToken(pushToken);
            }
        } catch (error) {
            return undefined;
        }

        return undefined;
    }

    return {
        requestToken: requestToken,
        sendNotifications: sendPushNotification,
        token: expoToken,
        notification: receivedNotification,
    }
}

/**
 * A method to send a push-notification.
 * @param title The notification's title.
 * @param body The notification's body.
 */
function sendPushNotification(title: string, body: string): void {
    Notifications.scheduleNotificationAsync({
        content: {
            title: title,
            body: body,
        },
        trigger: { seconds: 1 },
    });
}

/**
 * A method to request to register for push-notifications and receive the token.
 * @returns The token for the push-notifications.
 */
async function registerForPushNotificationsAsync(): Promise<string | undefined> {
    let token;
    if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    } else {
        alert('Must use physical device for Push Notifications');
    }

    if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
            name: 'default',
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: '#FF231F7C',
        });
    }

    return token;
}