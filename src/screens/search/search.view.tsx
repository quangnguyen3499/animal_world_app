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
import filter from 'lodash.filter';
import {ButtonCircle, RadioButton} from '@shared-view';
import _ from 'lodash';

const numColumns = 1;

interface State {
  isLoading: boolean;
  keySearchShop: any;
  keySearchSource: any;
  keySearchTarget: any;
  shopsSearch: Array<Object>;
  flag: any;
  isSearchPath: boolean;
}

interface Props {
  navigation?: any;
  shops: any;
}

export default class SearchComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: false,
      shopsSearch: Array({
        id: Number,
        name: String,
      }),
      keySearchShop: '',
      keySearchSource: '',
      keySearchTarget: '',
      flag: 0,
      isSearchPath: false,
    };
  }

  renderItem = ({item, index}: any, flag: any) => {
    const {navigation} = this.props;

    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    
    const setValue = (item: any) => {
      switch (flag) {
        case 0:
          console.log("search shop");
          
          // navigation.navigate('Detail', {place_id: item.id});
          break;
        case 1:
          this.setState({keySearchSource: item.id});
          break;
        case 2:
          this.setState({keySearchTarget: item.id});
          // navigation.navigate('IndoorMap', {})
          break;
        default:
          break;
      }
    };    
    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
        onPress={() => setValue(item)}
      >
      {/* <Text style={styles.itemText}>{item.name}</Text> */}
      </TouchableOpacity>
    );
  };

  doSearchShop = (text: any) => {
    const valueSearch = text.toLowerCase();    
    const filteredData = _.filter(this.props.shops, {name: 'Pizza Company'});
     
    this.setState({shopsSearch: filteredData});
    this.setState({keySearchShop: valueSearch});
  };

  SearchShop = () => {
    const {keySearchShop, shopsSearch} = this.state;

    return (
      <View style={styles.searchResult}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={keySearchShop}
          onChangeText={search => this.doSearchShop(search)}
          placeholder="Input shop..."
          style={styles.search}
        />
        <FlatList
          data={shopsSearch}
          numColumns={numColumns}
          renderItem={item => this.renderItem(item, 0)}
          style={styles.flatlist}
        />
      </View>
    );
  };

  SearchPath = () => {
    const {keySearchSource, keySearchTarget} = this.state;
    const {navigation} = this.props;

    return (
      <View style={styles.searchResult}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={keySearchSource}
          onChangeText={value => this.doSearchShop(value)}
          placeholder="From..."
          style={styles.search}
        />
        <FlatList
          data={this.state.shopsSearch}
          numColumns={numColumns}
          renderItem={item => this.renderItem(item, 1)}
          style={styles.flatlist}
        />
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="always"
          value={keySearchTarget}
          onChangeText={value => this.doSearchShop(value)}
          placeholder="To..."
          style={styles.search}
        />
        <FlatList
          data={this.state.shopsSearch}
          numColumns={numColumns}
          renderItem={item => this.renderItem(item, 2)}
          style={styles.flatlist}
        />
        <ButtonCircle
          onPress={() =>
            navigation.navigate('IndoorMap', {
              source_id: keySearchSource,
              target_id: keySearchTarget,
            })
          }
          name={'search'}
          style={{backgroundColor: 'blue'}}
        />
      </View>
    );
  };

  render() {
    const {isSearchPath} = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.formSelect}>
          <RadioButton
            onPress={() => this.setState({isSearchPath: false})}
            size={18}
            selected={!isSearchPath}
          />
          <Text>Search shop</Text>
          <RadioButton
            onPress={() => this.setState({isSearchPath: true})}
            size={18}
            selected={isSearchPath}
          />
          <Text>Search direction</Text>
        </View>
        <View>
          {isSearchPath ? this.SearchPath() : this.SearchShop()}
        </View>
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
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  searchResult: {
    position: 'absolute',
    width: '100%'
  },
});
