import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet, Alert, Button, } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Home from './screens/HomeScreen';
import GetStarted from './screens/GetStarted';
import SignUpScreen from './screens/SignUpScreen';
import LogInScreen from './screens/LogInScreen';
import Dashboard from './screens/DashboardScreen';
import SearchBar from './screens/SearchBar';
import GallerySlider from './screens/GalleryScreen';
import Contact from './screens/ContactScreen';
import CustomDrawerContent from './screens/CustomDrawer';
import Myapp from './screens/SplashScreen';

// Stack Navigation
const Stack = createStackNavigator();
function MyStack() {
    return (             
        <Stack.Navigator
            screenOptions={{
                headerShown: false, 
            }}>
            <Stack.Screen name="Home" title="Go to main" component={Home} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="SearchBar" component={SearchBar} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{ title: '' }} />
            <Stack.Screen name="LogInScreen" component={LogInScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="GallerySlider" component={GallerySlider} />
        </Stack.Navigator>
    );
}

// Drawer Navigation
const Drawer = createDrawerNavigator();
function MyDrawer() {
    return (      
        <Drawer.Navigator 
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                // headerShown: false, 
                drawerStyle: { backgroundColor: '#008060' },
                drawerActiveTintColor: 'yellow',
                drawerInactiveTintColor: '#fff',
                drawerType: 'front',
                drawerItemStyle: { padding: 0, },
                drawerLabelStyle: { marginLeft: -24, fontSize: 12 }
            }}>
            <Drawer.Screen name="StackNav" title="Go to main" component={MyStack} options={{ drawerLabel: 'My Home', drawerIcon: ({ focused }) => (<FontAwesome5 name={'home'} size={14} color={focused ? 'yellow' : '#fff'}></FontAwesome5>) }} />
            <Drawer.Screen name="GallerySlider" component={GallerySlider} options={{ drawerLabel: 'About Us', drawerIcon: ({ focused }) => (<FontAwesome5 name={'home'} size={14} color={focused ? 'yellow' : '#fff'}></FontAwesome5>) }}/>
            <Drawer.Screen name="LogInScreen" component={LogInScreen} options={{ drawerLabel: 'Our Services', drawerIcon: ({ focused }) => (<FontAwesome5 name={'servicestack'} size={14} color={focused ? 'yellow' : '#fff'}></FontAwesome5>) }}/>
            <Drawer.Screen name="Contact" component={Contact} options={{ color: '#fff', drawerLabel: 'Settings', drawerIcon: ({ focused }) => (<FontAwesome5 name={'cog'} size={14} color={focused ? 'yellow' : '#fff'}></FontAwesome5>) }}/>
        </Drawer.Navigator>
    );
}

// Tab Navigation    
const Tab = createBottomTabNavigator();
function MyTab() {
    return (
        <Tab.Navigator initialRouteName="Home" 
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false, 
                tabBarActiveTintColor: 'yellow', 
                tabBarInactiveTintColor: '#fff',
                tabBarStyle: { backgroundColor: '#008060', borderTopLeftRadius: 0, borderTopRightRadius: 0 }
            }}>
            <Tab.Screen name="DrawerNav" component={MyDrawer} options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<FontAwesome5 name={'home'} size={22} color={color}></FontAwesome5>) }} />
            <Tab.Screen name="SearchBar" component={SearchBar} options={{ tabBarLabel: 'Search', tabBarIcon: ({ color }) => (<FontAwesome5 name={'search'} size={22} color={color}></FontAwesome5>) }} />
            <Tab.Screen name="SignUpScreen" component={SignUpScreen} options={{ tabBarLabel: 'Browse', tabBarIcon: ({ color }) => (<FontAwesome5 name={'box-open'} size={22} color={color}></FontAwesome5>) }} />
            <Tab.Screen name="LogInScreen" component={LogInScreen} options={{ tabBarLabel: 'Log In', tabBarIcon: ({ color }) => (<FontAwesome5 name={'bell'} size={22} color={color}></FontAwesome5>) }} />
            <Tab.Screen name="Dashboard" component={Dashboard} options={{ tabBarLabel: 'Profile', tabBarIcon: ({ color }) => (<FontAwesome5 name={'user'} size={22} color={color}></FontAwesome5>) }} />
        </Tab.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer> 
            <MyTab />
        </NavigationContainer> 
    );
}