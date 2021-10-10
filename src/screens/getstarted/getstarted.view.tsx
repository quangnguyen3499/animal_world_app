import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions
} from 'react-native';
import { scale, verticalScale, widthPercentageToDP } from '@shared-view';
import AppIntroSlider from 'react-native-app-intro-slider';
import {
  BACKGROUND_STARTED, BACKGROUND_STARTED_2, BACKGROUND_STARTED_3,
  SLIDE_STARTED, SLIDE_STARTED_2, SLIDE_STARTED_3
} from '@assets';
import { ItemSlider } from '@core';

const { width, height } = Dimensions.get('window');

interface Props {
  navigation?: any;
}

const data = [
  {
    key: 'one',
    title: 'Welcome to aking',
    text: 'Whats going to happen tomorrow?',
    image: SLIDE_STARTED,
    background: BACKGROUND_STARTED
  },
  {
    key: 'two',
    title: 'Work happens',
    text: 'Get notified when work happens.',
    image: SLIDE_STARTED_2,
    background: BACKGROUND_STARTED_2
  },
  {
    key: 'three',
    title: 'Tasks and assign',
    text: 'Task and assign them to colleagues.',
    image: SLIDE_STARTED_3,
    background: BACKGROUND_STARTED_3
  }
];

export class GetStartedComponent extends Component<Props> {
  slider: any;

  constructor(props: Props) {
    super(props);
  }

  _renderItem = ({ item, index }: { item: ItemSlider, index: number }) => {
    return (
      <View style={styles.container}>
        <View style={styles.slide}>
          <Image source={item.image} style={styles.imageSlider} resizeMode={'contain'} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
        </View>
        <View style={styles.background}>
          <Image source={item.background} style={styles.backgroundImage} resizeMode={'stretch'} />
          <View>
            <TouchableOpacity activeOpacity={1} onPress={() => index != data.length - 1 ? this.slider?.goToSlide(index + 1) : {}} style={styles.buttonGetStarted}>
              <Text style={styles.textGetStarted}>Get Started</Text>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} onPress={() => { c }} style={styles.buttonLogin}>
              <Text style={styles.textLogin}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    return (
      <AppIntroSlider
        ref={(ref) => (this.slider = ref)}
        renderItem={this._renderItem}
        data={data}
        showNextButton={false}
        dotStyle={styles.dot}
        activeDotStyle={styles.activeDot}
        showDoneButton={false}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  slide: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: verticalScale(16),
    color: '#313131',
    opacity: 0.8,
    marginVertical: verticalScale(5)
  },
  title: {
    textAlign: 'center',
    fontSize: verticalScale(22),
    color: '#313131',
    marginTop: verticalScale(20),
  },
  background: {
    flex: 1,
  },
  imageSlider: {
    width: scale(305),
    height: verticalScale(252)
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: widthPercentageToDP('100')
  },
  dot: {
    bottom: height / 3.5,
    backgroundColor: '#979797',
  },
  activeDot: {
    bottom: height / 3.5,
    backgroundColor: '#000000'
  },
  buttonLogin: {
    alignItems: 'center',
  },
  textLogin: {
    fontSize: verticalScale(16),
    color: '#FFFFFF'
  },
  buttonGetStarted: {
    alignItems: 'center',
    justifyContent: 'center',
    height: verticalScale(48),
    marginTop: 80,
    margin: 35,
    borderRadius: 5,
    backgroundColor: '#FFFFFF'
  },
  textGetStarted: {
    fontSize: verticalScale(16),
    color: '#313131'
  }
});
