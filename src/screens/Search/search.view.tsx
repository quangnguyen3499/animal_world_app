/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Text,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import filter from 'lodash.filter';
import { ButtonCircle } from '@shared-view';

const numColumns = 1;

interface State {
  isLoading: boolean;
  shops: Array<Object>;
  keySearchShop: any;
  keySearchSource: any;
  keySearchTarget: any;
  shopsSearch: Array<Object>;
  flag: any;
  isSearchPath: boolean;
}

interface Props {
  navigation ?: any
  doGetListShop: () => void
}

export default class SearchComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      shops: Array({
        id: Number,
        name: String,
        typical: String,
      }),
      shopsSearch: Array({
        id: Number,
        name: String,
        typical: String,
      }),
      keySearchShop: '',
      keySearchSource: '',
      keySearchTarget: '',
      flag: 0,
      isSearchPath: false,
    };
  }

  renderItem = ({item, index} : any, flag: any) => {
    const {navigation} = this.props;

    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    const setValue = (item: any) => {
      switch (flag) {
        case 0:
          navigation.navigate('Detail', {place_id: item.id});
          break;
        case 1:
          this.setState({keySearchSource: item.id});
          break;
        case 2:
          this.setState({keySearchTarget: item.id});
          break;
        default: break;
      }
    };
    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
        onPress={() => setValue(item)}
      >
        <Text style={styles.itemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  doSearchShop = (text: any) => {
    const formattedQuery = text.toLowerCase();
    const filteredData = filter(this.state.shops, (item: { name: String; typical: String; }) => {
      return this.contains(item, formattedQuery);
    });
    this.setState({shopsSearch: filteredData});
    this.setState({keySearchShop: formattedQuery});
  };

  contains = ({ name, typical }: {name: String; typical: String;}, query: any) => {
    if (name.includes(query) || typical.includes(query)) {
      return true;
    }
    return false;
  };

  SearchShop = () => {
    const { isLoading, keySearchShop } = this.state;

    return (
      <View style={styles.searchResult}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={keySearchShop}
          onChangeText={(search) => this.doSearchShop(search)}
          placeholder="Input shop..."
          style={styles.search}
        />
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={this.state.shopsSearch}
            numColumns={numColumns}
            renderItem={(item) => this.renderItem(item, 0)}
            style={styles.flatlist}
          />
        )}
      </View>
    );
  }

  SearchPath = () => {
    const { keySearchSource, keySearchTarget } = this.state;
    const { navigation } = this.props;

    return (
      <View style={styles.searchResult}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={keySearchSource}
          onChangeText={(value) => this.doSearchShop(value)}
          placeholder="From..."
          style={styles.search}
        />
        <FlatList
          data={this.state.shopsSearch}
          numColumns={numColumns}
          renderItem={(item) => this.renderItem(item, 1)}
          style={styles.flatlist}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={keySearchTarget}
          onChangeText={(value) => this.doSearchShop(value)}
          placeholder="To..."
          style={styles.search}
        />
        <FlatList
          data={this.state.shopsSearch}
          numColumns={numColumns}
          renderItem={(item) => this.renderItem(item, 2)}
          style={styles.flatlist}
        />
        <ButtonCircle
          onPress={() => navigation.navigate('IndoorMap', {
            source_id: keySearchSource,
            target_id: keySearchTarget,
          })}
          name={'search'}
          style={{backgroundColor: 'blue'}}
        />
      </View>
    );
  }

  render() {
    const { isSearchPath } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formSelect}>
          <ButtonCircle
            onPress={() => this.setState({isSearchPath: false})}
            name={isSearchPath ? 'radio-button-off' : 'radio-button-on'}
            style={{backgroundColor: 'blue'}}
          />
          <Text>Search shop</Text>
          <ButtonCircle
            onPress={() => this.setState({isSearchPath: true})}
            name={isSearchPath ? 'radio-button-on' : 'radio-button-off'}
            style={{backgroundColor: 'blue'}}
          />
          <Text>Search direction</Text>
        </View>
        <SafeAreaView style={{backgroundColor: '#FFFFFF'}} />
        {isSearchPath ? this.SearchShop : this.SearchPath}
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
  formSelect: {
    marginLeft: 300,
  },
  searchResult: {
    position: 'absolute',
    width: '80',
  },
});
