import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonCircle = ({name, onPress, size, style}: any) => (
  <TouchableOpacity
    style={[
      style,
      {
        width: 40,
        height: 40,
        borderRadius: 20,
        opacity: 0.8,
      },
    ]}>
    <Icon.Button
      name={name}
      onPress={onPress}
      size={size}
      iconStyle={{marginTop: 2, marginLeft: 2, marginRight: 0}}
      backgroundColor={'transparent'}
    />
  </TouchableOpacity>
);

const NormalButton = ({name, onPress, style}: any) => (
  <TouchableOpacity 
    style={[styles.normalBtn, style]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{name}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  normalBtn: {
    backgroundColor: '#DA70D6',
    height: 40,
    borderRadius: 6,
    fontSize: 20,
    justifyContent: 'center',
    width: 160,
    margin: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
})

export {ButtonCircle, NormalButton};
