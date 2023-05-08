import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { createNativeStackNavigator } from "@react-navigation/native-stack";


//screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";

const HomeStackNavigatior = createNativeStackNavigator()

function MyStack(){
    return(
        <HomeStackNavigatior.Navigator
            initialRouteName="HomeScreen"
        >
            <HomeStackNavigatior.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigatior.Screen 
                 name="Stack"
                 component={StackScreen}
                 options={{
                     headerBackTitleVisible: false
                 }}
            />
        </HomeStackNavigatior.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return(
        <Tab.Navigator 
        initialRouteName="Home" 
        screenOptions={{ 
            tabBarActiveTintColor: 'purple'
        }}>
            <Tab.Screen 
            name="Home" 
            component={MyStack}
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="home" color={color} size={30} />
                ),
                tabBarBadge: 10,
                headerShown: false,
            }}
            />
            <Tab.Screen 
            name="Settings" 
            component={SettingsScreen}
            options={{
                tabBarLabel: 'Feed',
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                ),
                headerShown: true
            }}
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}