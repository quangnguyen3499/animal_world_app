import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ButtonCircle = ({name, onPress, size, style, color}: any) => (
  <TouchableOpacity
    style={[
      style,
      {
        width: size+20,
        height: size+20,
        borderRadius: size/2+10,
        opacity: 0.8,
      },
    ]}>
    <Icon.Button
      name={name}
      onPress={onPress}
      size={size}
      iconStyle={{marginTop: 2, marginLeft: 2, marginRight: 0}}
      backgroundColor={'transparent'}
      color={color || 'black'}
    />
  </TouchableOpacity>
);

const NormalButton = ({name, onPress, style, width}: any) => {
  const setWidth = (width: any) => {
    let val;
    switch(width) {
      case 'large':
        val = 240;
        break;
      case 'normal':
        val = 120;
        break;
      case 'small':
        val = 100;
        break;
    }
    return val;
  }

  return (
  <TouchableOpacity 
    style={[styles.normalBtn, style, {width: setWidth(width)}]}
    onPress={onPress}
  >
    <Text style={styles.buttonText}>{name}</Text>
  </TouchableOpacity>
)}

const RadioButton = ({onPress, size, selected}: any) => {
  return (
    <TouchableOpacity style={{
        height: size,
        width: size,
        borderRadius: size/2,
        borderWidth: 2,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onPress={onPress}
    >
      {
        selected ?
          <TouchableOpacity style={{
            height: size/2,
            width: size/2,
            borderRadius: size/4,
            backgroundColor: '#000'
          }}/>
          : null
      }
    </TouchableOpacity>
  );
}

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

export {ButtonCircle, NormalButton, RadioButton};
