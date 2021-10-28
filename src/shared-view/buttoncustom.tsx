import React from 'react'
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonCircle = ({name, onPress, size, style}: (any)) => (
  <TouchableOpacity
    style={[style, 
      {
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        opacity: 0.8
      }]}
  >
    <Icon.Button
      name={name}
      onPress={onPress}
      size={size}
      iconStyle={{marginTop: 2, marginLeft: 2, marginRight: 0}}
      backgroundColor={'transparent'}
    />
  </TouchableOpacity>
)

export { ButtonCircle }