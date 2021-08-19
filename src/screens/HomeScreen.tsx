import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from '../core/config/api';
import Tabs from '../navigation/tabs';

const numColumns = 2;

type MyState = {
  isLoading: boolean;
  items: Array<Object>;
}

export default class HomeScreen extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      items: Array({
        id: Number,
        name: String,
        typical: String,
        price: Number,
        discount: Number,
        status: String,
        image: Array,
      }),
    };
  }

  componentDidMount() {
    this.getListItems();
  }

  getListItems = async () => {
    this.setState({isLoading: true});
    await axios
      .get('http://192.168.1.169:3000/api/v1/items')
      .then(res => {
        this.setState({
          items: res.data.data.items,
          isLoading: false,
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  renderItem = ({item, index}: {item: any; index: number}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return(
      <TouchableOpacity
        style={styles.item}
        key={index}
        onPress={() => {}}
      >
        {/* <Image source={require('../assets/images/test.jpg')} style={styles.itemImage} /> */}
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    const loading = this.state.isLoading;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}} />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={this.state.items}
            numColumns={numColumns}
            renderItem={this.renderItem}
            style={styles.flatlist}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: 'dimgray',
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 20,
    width: '50%',
  },
  item: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 15,
    height: Dimensions.get('window').width / numColumns,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginVertical: 20,
  },
  itemImage: {
    height: 200,
    width: 160,
    position: 'absolute',
    borderRadius: 10,
  },
  flatlist: {
    margin: 20,
    marginTop: 50,
  },
});
