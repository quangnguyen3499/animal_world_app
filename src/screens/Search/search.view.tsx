import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import axios from '../../core/api/Api';
import filter from 'lodash.filter';

const numColumns = 1;

type MyState = {
  isLoading: boolean;
  items: Array<Object>;
  search: any;
  itemsSearch: Array<Object>;
}

export default class SearchComponent extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      items: Array({
        id: Number,
        name: String,
        typical: String,
      }),
      itemsSearch: Array({
        id: Number,
        name: String,
        typical: String,
      }),
      search: "",
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
        {/* <Text style={styles.itemText}>{item.name}</Text> */}
      </TouchableOpacity>
    )
  }

  handleSearch = (text: any) => {
    const formattedQuery = text.toLowerCase()
    const filteredData = filter(this.state.items, (item: { name: String; typical: String; }) => {
      return this.contains(item, formattedQuery);
    });
    this.setState({itemsSearch: filteredData});
    this.setState({search: formattedQuery});
  };
  
  contains = ({ name, typical }: {name: String; typical: String;}, query: any) => {
    if (name.includes(query) || typical.includes(query)) {
      return true;
    }
    return false;
  };

  render() {
    const loading = this.state.isLoading;
    const search = this.state.search;
    return (
      <View style={styles.container}>
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}} />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={search}
          onChangeText={(search) => this.handleSearch(search)}
          placeholder="Input item..."
          style={styles.search}
        />
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={this.state.itemsSearch}
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
    margin: 2,
    borderRadius: 10,
    height: 50,
    backgroundColor: '#fff',
  },
  flatlist: {
    margin: 10,
  },
  search: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    margin: 15,
  },
});
