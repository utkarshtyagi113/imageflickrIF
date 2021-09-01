import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import GalleryPhoto from './GalleryPhoto';
import App1 from './App1';

export default function Route() {

    const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
      headerMode='none'
      >
        <Stack.Screen name="Home" component={App1} />
        <Stack.Screen name="GalleryPhoto" component={GalleryPhoto} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}