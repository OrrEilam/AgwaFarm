import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenName } from './common/enums/ScreenName';
import { OrderScreen } from './pages/Order/OrderScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenName.Order} screenOptions={{headerShown: false}} >
        <Stack.Screen name={ScreenName.Order} component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}