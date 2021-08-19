import React, { FC } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import MarkedScreen from '../screens/MarkedScreen';
import LocationScreen from '../screens/LocationScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = (props: any) => (
  <TouchableOpacity
    style={{
      top: -5,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={props.onPress}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
      }}
    >
      {props.children}
    </View>
  </TouchableOpacity>
)

const Tabs = () => {
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 60,
          ...styles.shadow
        }
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image 
                source={require('../assets/icons/home.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image 
                source={require('../assets/icons/search.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image 
                source={require('../assets/icons/map.png')}
                resizeMode='contain'
                style={
                  focused 
                  ? {
                    width: 40,
                    height: 40
                  }
                  : {
                    width: 30,
                    height: 30
                  }
                }
              />
            </View>
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      />
      <Tab.Screen 
        name="Marked" 
        component={MarkedScreen} 
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image 
                source={require('../assets/icons/notice.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </View>
          )
        }}
      />
      <Tab.Screen 
        name="Accourt" 
        component={AccountScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image 
                source={require('../assets/icons/account.png')}
                resizeMode='contain'
                style={{
                  width: 25,
                  height: 25
                }}
              />
            </View>
          )
        }}
      />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      height:10,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5
  }
})
export default Tabs;