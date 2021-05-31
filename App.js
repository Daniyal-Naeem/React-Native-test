import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import ProfileScreen from './screens/ProfileScreen'
import CompetitionScreen from './screens/CompetitionScreen';
import MyVideosScreen from './screens/MyVideosScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator  screenOptions={{ headerShown: false, headerTitle:true}}>
      <Stack.Screen name="Sign in" component={SignInScreen} />
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Sign Up" component={SignUpScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Competition" component={CompetitionScreen} />
      <Stack.Screen name="MyVideos" component={MyVideosScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;