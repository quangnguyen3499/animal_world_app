import { Colors } from '@resources';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

const Marker = ({logoUrl, top, left}: any) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const showDetail = () => setIsShowDetail(!isShowDetail);

  return (
    <View style={[{top, left}, styles.container]}>
      {isShowDetail ? (
        <View style={styles.modal}>
          <Image
            source={{uri: logoUrl}}
            style={styles.image}
          />
          <View style={styles.talkBubbleTriangle} />
        </View>
      ) : null}
      <TouchableOpacity
        onPress={() => showDetail()}
        style={[styles.marker]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  modal: {
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10
    },
    elevation: 20,
    width: 70,
    height: 32,
    top: -40,
    left: -26,
    padding: 2,
  },
  image: {
    width: 64, 
    height: 30,
    borderRadius: 10,
  },
  marker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    backgroundColor: 'red',
    position: 'absolute',
  },
  talkBubbleTriangle: {
    backgroundColor: "transparent",
    borderBottomWidth: 10,
    borderBottomColor: Colors.PINK,
    borderLeftWidth: 10,
    borderLeftColor: "transparent",
    borderRightWidth: 10,
    borderRightColor: "transparent",
    position: "absolute",
    top: 29,
    left: 26,
    transform: [{ rotate: "180deg" }],
  }
});

export {Marker};
