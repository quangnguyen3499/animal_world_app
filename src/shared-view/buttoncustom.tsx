import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ButtonCircle = ({name, onPress, size, style, color, title}: any) => (
  <TouchableOpacity
    style={[
      style,
      {
        width: size+30,
        height: size+20,
        borderRadius: size/2+10,
        opacity: 0.8,
        flexDirection: 'row'
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
    <Text style={{alignSelf: 'center', fontSize: 16, color: '#fff'}}>{title}</Text>
  </TouchableOpacity>
);

const NormalButton = ({name, onPress, style, width}: any) => {
  const setWidth = (width: any) => {
    let val;
    switch(width) {
      case 'verylarge':
        val = 320;
        break;
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
    backgroundColor: '#00CEC9',
    height: 50,
    borderRadius: 20,
    fontSize: 20,
    justifyContent: 'center',
    width: 160,
    margin: 20,
    shadowColor: '#000',
    elevation: 4
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
  },
})

export {ButtonCircle, NormalButton, RadioButton};
