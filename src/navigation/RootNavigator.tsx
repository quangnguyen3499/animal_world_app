import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  HomeContainer,
  SearchContainer,
  DetailContainer,
  LoginContainer,
  RegisterContainer,
  ListPlaceContainer,
  IndoorMapContainer,
  SplashContainer,
  AccountContainer,
} from '@screens';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Splash"
          component={SplashContainer}
          options={{title: 'Splash', headerShown: false}}
        /> */}
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
          name="ListPlace"
          component={ListPlaceContainer}
          options={{title: 'ListPlace', headerShown: false}}
        />
        <Stack.Screen
          name="Account"
          component={AccountContainer}
          options={{title: 'Sửa hồ sơ'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
