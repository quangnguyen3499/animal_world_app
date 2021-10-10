import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { 
  HomeContainer, 
  SearchContainer, 
  DetailContainer, 
  LoginContainer,
  AccountContainer,
  RegisterContainer,
  GetStartedContainer,
  IndoorMapContainer
} from '@screens';
import { isSignedIn } from '@core';
import { Alert } from 'react-native';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    async function checkSignIn() {
      let res = await isSignedIn()
        res 
        ? setIsLoggedIn(true)
        : setIsLoggedIn(false)
    }
    checkSignIn()
    console.log("is Logged In: " + isLoggedIn);
  })
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLoggedIn ? (
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
            {/* <Stack.Screen
              name="Home"
              component={HomeContainer}
              options={{ title: 'Home', headerShown: false }}
            /> */}
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
            <Stack.Screen
              name="Account"
              component={AccountContainer}
              options={{ title: 'Account', headerShown: false }}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer >
  );
};