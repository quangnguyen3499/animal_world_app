import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Colors } from '@resources';
import { verticalScale } from '@shared-view';

interface Props {
  title: string;
  style: Object;
  textStyle: Object;
  onPress: () => void;
}

export const CustomCard = ({ title, style, textStyle, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

/** 
* Import into the project

  <CustomButton
    title="Log in"
    onPress={() => Alert.alert('onPress')}
    style={{ // styles for button }}
    textStyle={{ // styles for button text  }}
  />
    
**/

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: verticalScale(48),
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.RED,
  },
  text: {
    fontSize: verticalScale(18),
    color: Colors.WHITE,
  },
});