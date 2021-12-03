import React from 'react';
import {Text} from 'react-native';

const TextCustom = ({style, text, size, weight}: any) => {
  return (
    <Text style={[style, {fontSize: size, fontWeight: weight ? "bold": "normal"}]}>{text}</Text>
  )
}
export {TextCustom};
