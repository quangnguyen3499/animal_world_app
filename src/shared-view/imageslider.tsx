import React, { useState } from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, StyleSheet, Image} from 'react-native';

const ITEM_WIDTH = 300;
const ITEM_HEIGHT = 200;

const _renderItem = ({item, index}: any) => (
  <Image source={{uri: item}} style={styles.image} />
);

const ImageSlider = ({data, style}: any) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
  <View style={[styles.slider, style]}>
    <Carousel
      layout={'default'}
      data={data}
      renderItem={_renderItem}
      sliderWidth={ITEM_WIDTH}
      itemWidth={ITEM_WIDTH}
      onSnapToItem={(index) => setActiveTab(index)}
      slideStyle={{borderRadius: 20, overflow: 'hidden'}}
    />
    <Pagination
      containerStyle={styles.pagination}
      dotStyle={styles.dot}
      dotsLength={data.length}
      inactiveDotOpacity={0.4}
      inactiveDotScale={0.4}
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
    backgroundColor: '#388AA4',
    width: 10,
    height: 10,
    borderRadius: 10,
    justifyContent: 'center'
  },
  slider: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute'
  },
  pagination: {
    top: 176,
    position: 'absolute',
  },
});

export {ImageSlider};
