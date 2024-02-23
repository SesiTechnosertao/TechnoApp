import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import StackRoutes from './stack.routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AudioProvider } from '../useAudio';


export default function Routes() {
    return (
        <SafeAreaProvider>
            <AudioProvider>
                <NavigationContainer>
                    <StackRoutes />
                </NavigationContainer>
            </AudioProvider>
        </SafeAreaProvider>
    );
}