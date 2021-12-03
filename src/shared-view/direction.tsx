import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Svg, { Polyline } from 'react-native-svg';

const Direction = ({path, distance, top, left}: any) => (
  <Svg style={styles.container}>
    <Polyline
      points={path}
      stroke="blue"
      strokeWidth="3"
    />
    <Text
      style={[{left: left-10, top: top-52}, styles.distance]}
    >
      {distance || 0}
    </Text>
  </Svg>
);

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  distance: {
    fontSize: 16, 
    color: 'black', 
    fontWeight: 'bold',
    backgroundColor: 'lightblue',
    width: 20,
    textAlign: 'center',
    borderRadius: 10,
    opacity: 0.8
  }
});

export {Direction};
