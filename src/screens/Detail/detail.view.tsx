import React, {Component} from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import axios from '../../core/api/api';

const {width} = Dimensions.get('window');
const height = width * 0.6;

type MyState = {
  isLoading: boolean;
  items: Object;
  activeDot: Number;
};

export default class DetailComponent extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      items: {
        id: Number,
        name: String,
        typical: String,
        price: Number,
        discount: Number,
        status: String,
        image: Array,
      },
      activeDot: 0,
    };
  }

  componentDidMount() {
    this.getItem();
  }

  getItem = async () => {
    this.setState({isLoading: true});
    await axios
      .get('http://192.168.1.169:3000/api/v1/items')
      .then(res => {
        this.setState({
          items: res.data.data,
          isLoading: false,
        });
      })
      .catch(e => {
        console.log(e);
      });
  };

  changeSlide = (slideEvent: any) => {
    const nativeEvent = slideEvent.nativeEvent;
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width - 0.01,
    );
    this.setState({activeDot: slide});
  };

  render() {
    const images = [
      'https://cdn.dribbble.com/users/2673969/screenshots/14354050/media/9ba09ab6f55ce4b4dfae5a0b481acf57.png',
      'https://cdn.dribbble.com/users/2673969/screenshots/14354050/media/9ba09ab6f55ce4b4dfae5a0b481acf57.png',
      'https://cdn.dribbble.com/users/2673969/screenshots/14354050/media/9ba09ab6f55ce4b4dfae5a0b481acf57.png',
      'https://cdn.dribbble.com/users/2673969/screenshots/14354050/media/9ba09ab6f55ce4b4dfae5a0b481acf57.png',
      'https://cdn.dribbble.com/users/2673969/screenshots/14354050/media/9ba09ab6f55ce4b4dfae5a0b481acf57.png',
    ];
    return (
      <View style={styles.container}>
        <View>
          <ScrollView
            pagingEnabled
            horizontal
            onScroll={this.changeSlide}
            showsHorizontalScrollIndicator={false}
            style={styles.scroll}>
            {images.map((image, index) => (
              <Image
                key={index}
                source={{uri: image}}
                style={styles.imgSlide}
              />
            ))}
          </ScrollView>
          <View style={styles.pagination}>
            {images.map((i, k) => (
              <Text
                key={k}
                style={
                  k == this.state.activeDot
                    ? styles.pagingActiveText
                    : styles.pagingText
                }>
                ⬤
              </Text>
            ))}
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.h1}>Rusa Deer</Text>
          <Text style={styles.h3}>Content description</Text>
          <View style={styles.statistics}>
            <Text style={[styles.statDetails, styles.h2]}>
              <Image
                style={styles.iconDetails}
                source={require('@assets/icons/adn.png')}
              />
              Mammals
            </Text>
            <Text style={[styles.statDetails, styles.h2]}>
              <Image
                style={styles.iconDetails}
                source={require('@assets/icons/ruler.png')}
              />
              142-185 cm
            </Text>
            <Text style={[styles.statDetails, styles.h2]}>
              <Image
                style={styles.iconDetails}
                source={require('@assets/icons/heart.png')}
              />
              15-20 years
            </Text>
            <Text style={[styles.statDetails, styles.h2]}>
              <Image
                style={styles.iconDetails}
                source={require('@assets/icons/weight.png')}
              />
              74-160 kg
            </Text>
          </View>
          <View>
            <Text style={styles.h2}>Distribution</Text>
            <Text style={styles.h3}>Content</Text>
          </View>
          <View>
            <Text style={styles.h2}>Description</Text>
            <Text style={styles.h3}>Content</Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={[styles.textBtn, styles.h3]}>
              <Image
                style={styles.iconDetails}
                source={require('@assets/icons/eye.png')}
              />
              Learn More
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
  scroll: {
    width,
    height,
  },
  imgSlide: {
    width,
    height,
    resizeMode: 'cover',
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    flexWrap: 'wrap',
  },
  pagingText: {
    color: '#888',
    margin: 3,
    fontSize: width / 30,
  },
  pagingActiveText: {
    color: '#fff',
    margin: 3,
    fontSize: width / 30,
  },
  content: {
    margin: 25,
  },
  statistics: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
  },
  statDetails: {
    width: '50%',
  },
  iconDetails: {
    width: width * 0.08,
    height: height * 0.08,
    resizeMode: 'contain',
  },
  h1: {
    fontSize: 22,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 18,
    lineHeight: 18,
    fontWeight: 'bold',
  },
  h3: {
    fontSize: 15,
    lineHeight: 15,
  },
  button: {
    width: '100%',
    backgroundColor: 'orange',
    padding: 15,
    borderRadius: 10,
  },
  textBtn: {
    textAlign: 'center',
    color: '#fff',
  },
});
