import React, { useState } from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, StyleSheet, Image} from 'react-native';

const ITEM_WIDTH = 400;
const ITEM_HEIGHT = 400;

const _renderItem = ({item, index}: any) => (
  <Image source={{uri: item}} style={styles.image} />
);

const ImageSlider = (data: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
  <View style={styles.slider}>
    <Carousel
      data={data.data}
      renderItem={_renderItem}
      sliderWidth={ITEM_WIDTH}
      itemWidth={ITEM_WIDTH}
      onSnapToItem={(index) => setActiveTab(index)}
    />
    <Pagination
      containerStyle={styles.pagination}
      dotStyle={styles.dot}
      dotsLength={data.data.length}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.6}
      activeDotIndex={activeTab}
    />
  </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 2,
  },
  dot: {
    backgroundColor: '#00CEC9',
    width: 20,
    height: 20,
    borderRadius: 10,
    top: 140,
    right: -120,
  },
  slider: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    top: 190,
    position: 'absolute',
  },
});

export {ImageSlider};
