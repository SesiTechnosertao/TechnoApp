import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './tabs.routes';
import QrReader from '../screens/QrReader';

const Stack = createNativeStackNavigator();

function StackRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={Tabs} />
            <Stack.Screen name="qrcode" component={QrReader} />
        </Stack.Navigator>
    )
}
export default StackRoutes;