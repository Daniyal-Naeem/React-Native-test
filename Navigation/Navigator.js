import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import CompetitionScreen from '../screens/CompetitionScreen'
import MyVideosScreen from '../screens/MyVideosScreen'
import ProfileScreen from '../screens/ProfileScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'
import SplashScreen from '../screens/SplashScreen'
import {Image} from 'react-native'

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height:85,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#FFA500",
                    elevation:2,
                    borderTopLeftRadius:30,
                    borderTopRightRadius:30,
                }
            }}
        >
             <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/home.png")}
                            style={{ height:35, width:35 }}
                        />
                    )
                }}
            />
              <Tab.Screen
                name="Competition"
                component={CompetitionScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/trophy.png")}
                            style={{ height:35, width:35 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="Sign In"
                component={SignInScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/add.png")}
                            style={{ height:75, width:75, marginTop:-80,
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="Sign Up"
                component={SignUpScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/left-arrow.png")}
                            style={{ height:35, width:35 }}
                        />
                    )
                }}
            />
          
               <Tab.Screen
                name="MyVideo"
                component={MyVideosScreen}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                        <Image
                            source={require("../assets/video.png")}
                            style={{ height:65, width:65 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};
   


const Stack = createStackNavigator();

const HomeStackNavigator = () => {
    return(
        <Stack.Navigator  screenOptions={{ headerShown: false, headerTitle:true}}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Competition" component={CompetitionScreen} />
        <Stack.Screen name="MyVideos" component={BottomTabNavigator} />
      </Stack.Navigator>
    )
}

export default HomeStackNavigator;