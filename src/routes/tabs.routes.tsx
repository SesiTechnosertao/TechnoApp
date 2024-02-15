import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons'

import Home from '../screens/Home';
import Audio from '../screens/Audio';
import Info from '../screens/Info';

const Tab = createBottomTabNavigator();

const ICON_SIZE = 32;

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
                    borderRadius: 10
                }
            }}
        >
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: (({ focused, color }) => {
                    if (focused) {
                        return (<Ionicons name='home' color={color} size={ICON_SIZE} />)
                    }
                    return (<Ionicons name='home-outline' color={color} size={ICON_SIZE} />)
                })
            }} />
            <Tab.Screen name="Audio" component={Audio} options={{
                tabBarIcon: (({ focused, color }) => {
                    if (focused) {
                        return (<Ionicons name='volume-high' color={color} size={ICON_SIZE} />)
                    }
                    return (<Ionicons name='volume-high-outline' color={color} size={ICON_SIZE} />)
                })
            }} />
            <Tab.Screen name="Info" component={Info} options={{
                tabBarIcon: (({ focused, color }) => {
                    if (focused) {
                        return (<Ionicons name='information-circle' color={color} size={ICON_SIZE} />)
                    }
                    return (<Ionicons name='information-circle-outline' color={color} size={ICON_SIZE} />)
                })
            }} />
        </Tab.Navigator>
    )
}
export default Tabs;