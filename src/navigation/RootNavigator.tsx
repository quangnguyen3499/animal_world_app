import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeContainer, SearchContainer, DetailContainer, MapContainer, AccountContainer } from '@screens';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeContainer}
          options={{ title: 'Home', headerShown: false }}
        />
        <Stack.Screen
          name="Search"
          component={SearchContainer}
          options={{ title: 'Search', headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailContainer}
          options={{ title: 'Detail', headerShown: false }}
        />
        <Stack.Screen
          name="Map"
          component={MapContainer}
          options={{ title: 'Map', headerShown: false }}
        />
        <Stack.Screen
          name="Account"
          component={AccountContainer}
          options={{ title: 'Account', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer >
  );
};