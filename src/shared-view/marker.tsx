import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Marker = ({top, left, color}: any) => {
  return (
    <View style={[{top, left}, styles.container]}>
      <Icon
        name="map-marker-alt"
        color={color || "red"}
        size={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

export {Marker};
