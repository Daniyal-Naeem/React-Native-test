import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ProfileScreen from './ProfileScreen';
import SignInScreen from './SignInScreen'

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
        />
        <Tab.Screen
          name="Sign in"
          component={SignInScreen}
        />
      </Tab.Navigator>
    );
  };
  
export default AppNavigator;