import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonCircle = ({name, onPress, size, style, backgroundColor}: (any)) => (
  <TouchableOpacity
    style={[style, {width: 40, height: 40, borderRadius: 20}]}
  >
    <Icon.Button
      name={name}
      onPress={onPress}
      backgroundColor={backgroundColor}
      size={size}
      iconStyle={{marginRight: 0}}
    />
  </TouchableOpacity>
)

export { ButtonCircle }