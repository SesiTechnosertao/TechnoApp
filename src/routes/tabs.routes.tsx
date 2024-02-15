import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'

import Home from '../screens/Home';
import Audio from '../screens/Audio';
import Info from '../screens/Info';

const Tab = createBottomTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: '#323232',

                tabBarStyle: {
                    position: 'absolute',
                    borderTopWidth: 0,
                    height: 60,

                    backgroundColor: '#FF914D',
                    borderRadius: 5
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: (({ focused, color, size }) => {
                    if (focused) {
                        return (<Ionicons name='home' color={color} size={32} />)
                    }
                    return (<Ionicons name='home-outline' color={color} size={32} />)
                })
            }} />
            <Tab.Screen name="Audio" component={Audio} options={{
                tabBarIcon: (({ focused, color, size }) => {
                    if (focused) {
                        return (<Ionicons name='volume-high' color={color} size={32} />)
                    }
                    return (<Ionicons name='volume-high-outline' color={color} size={32} />)
                })
            }} />
            <Tab.Screen name="Info" component={Info} options={{
                tabBarIcon: (({ focused, color, size }) => {
                    if (focused) {
                        return (<Ionicons name='information-circle' color={color} size={32} />)
                    }
                    return (<Ionicons name='information-circle-outline' color={color} size={32} />)
                })
            }} />
        </Tab.Navigator>
    )
}
export default Tabs;