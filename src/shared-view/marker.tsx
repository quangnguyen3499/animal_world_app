import { Colors } from '@resources';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

const Marker = ({title, logoUrl, top, left}: any) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const showDetail = () => setIsShowDetail(!isShowDetail);

  return (
    <View style={[{top, left}, styles.container]}>
      {isShowDetail ? (
        <View style={styles.modal}>
          <Text style={{fontWeight: 'bold', fontSize: 12}}>{title}</Text>
          <Image
            source={{uri: logoUrl}}
            style={{width: 64, height: 30}}
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
    backgroundColor: Colors.PINK,
    borderRadius: 10,
    width: 80,
    height: 78,
    top: -90,
    left: -34,
    padding: 8,
  },
  marker: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    opacity: 0.8,
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
    top: 78,
    left: 28,
    transform: [{ rotate: "180deg" }],
  }
});

export {Marker};
