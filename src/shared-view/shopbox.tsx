import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ShopBox = ({top, left, name}: any) => {  
  return (
    <Text style={[{top, left}, styles.container]}>
      {name}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

export {ShopBox};
