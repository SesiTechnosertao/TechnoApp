import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './src/routes/tabs.routes';


export default function App() {
  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}
