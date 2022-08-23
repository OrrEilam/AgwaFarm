import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, {  } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { ScreenName } from './common/enums/ScreenName';
import { store } from './common/store/store';
import { OrderScreen } from './pages/Order/OrderScreen';
import { baseStyles } from './common/styles/baseStyles';

import * as Notifications from 'expo-notifications';
import { useNotifications } from './common/hooks/useNotifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

const Stack = createNativeStackNavigator();

export default function App() {

  const notifications = useNotifications();

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <SafeAreaView style={baseStyles.application}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName={ScreenName.Order} screenOptions={{ headerShown: false }} >
              <Stack.Screen name={ScreenName.Order} component={OrderScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </Provider>
  );
};