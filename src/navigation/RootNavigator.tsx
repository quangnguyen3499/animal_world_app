import React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SearchContainer,
  DetailContainer,
  LoginContainer,
  RegisterContainer,
  HomeContainer,
  IndoorMapContainer,
  SplashContainer,
  AccountContainer
} from '@screens';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff'
  },
};

export const RootNavigator = () => (
  <NavigationContainer theme={MyTheme}>
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashContainer}
        options={{title: 'Splash', headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={RegisterContainer}
        options={{title: 'Register', headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={LoginContainer}
        options={{title: 'Login', headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeContainer}
        options={{title: 'Home', headerShown: false}}
      />
      <Stack.Screen
        name="IndoorMap"
        component={IndoorMapContainer}
        options={{
          title: 'IndoorMap',
          headerShown: false,
          cardStyle: {backgroundColor: '#fff'},
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchContainer}
        options={{title: 'Search', headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailContainer}
        options={{title: 'Detail', headerShown: false}}
      />
      <Stack.Screen
        name="Account"
        component={AccountContainer}
        options={{title: 'Sửa hồ sơ'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
