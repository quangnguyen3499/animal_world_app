import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {View, Text, StyleSheet} from 'react-native';

const ITEM_WIDTH = 300;
const ITEM_HEIGHT = 300;

const _renderItem = ({item}: any) => (
  <View style={styles.slide}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

const ImageSlider = (data: any) => (
  <Carousel
    ref={ref => (carousel = ref)}
    data={data}
    renderItem={_renderItem}
    sliderWidth={300}
    itemWidth={300}
    layout={'stack'}
    layoutCardOffset={18}
  />
);

const styles = StyleSheet.create({
  slide: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'dodgerblue',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
});

export {ImageSlider};
