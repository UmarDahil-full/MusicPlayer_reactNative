import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {  StyleSheet, View } from 'react-native';
import ListMusic from './components/Screens/ListMusic';
import { createStackNavigator } from '@react-navigation/stack';

import Player from './components/Screens/Player';

const Stack = createStackNavigator()

export default function App() {
  return (
    
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerShown:false
        }}
        >

              <Stack.Screen
                  name="List"
                component={ListMusic}
            />
            <Stack.Screen
                name="Player"
                component={Player}
            />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}