import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  HomeContainer, 
  SearchContainer, 
  DetailContainer, 
  LoginContainer,
  RegisterContainer,
  GetStartedContainer,
  IndoorMapContainer,
  // ListPlaceContainer,
} from '@screens';

const Stack = createStackNavigator();
  
export const RootNavigator = (isLoggedIn: any) => {
  console.log(isLoggedIn.isLoggedIn);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn.isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen
              name="Register"
              component={RegisterContainer}
              options={{ title: 'Register', headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={LoginContainer}
              options={{ title: 'Login', headerShown: false }}
            />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={HomeContainer}
              options={{ title: 'Home', headerShown: false }}
            />
            <Stack.Screen
              name="IndoorMap"
              component={IndoorMapContainer}
              options={{ 
                title: 'IndoorMap', 
                headerShown: false,
                cardStyle: {backgroundColor: '#fff'} 
              }}
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
            {/* <Stack.Screen
              name="ListPlace"
              component={ListPlaceContainer}
              options={{ title: 'ListPlace', headerShown: false }}
            /> */}
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer >
  );
};