import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';

const Marker = ({title, imageUrl, top, left}: any) => {
  const [isShowDetail, setIsShowDetail] = useState(false);

  const showDetail = () => setIsShowDetail(true);

  return (
    <View>
      {!isShowDetail ? (
        <View style={styles.detail}>
          <Text style={styles.title}>{title}</Text>
          <Image source={imageUrl} />
        </View>
      ) : null}
      <TouchableOpacity
        onPress={() => showDetail}
        style={[styles.marker, {top, left}]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    height: 8,
    width: 8,
    borderRadius: 4,
    backgroundColor: 'red',
    position: 'absolute',
    opacity: 0.8,
  },
  detail: {
    //
  },
  title: {
    //
  },
});

export {Marker};
