import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Sign in" component={SignInScreen} />
      {/* <Stack.Screen name="Sign Up" component={SplashScreen} /> */}
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;