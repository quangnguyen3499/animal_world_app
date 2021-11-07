import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import storage from '@react-native-firebase/storage';

const numColumns = 2;

interface Props {
  navigation?: any;
  listplace: Array<Object>;
  doGetListPlace: () => void;
}

export class ListPlaceComponent extends Component<Props, {}> {
  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.doGetListPlace();
  }

  async getThumbnail(url: string) {
    return await storage().ref(url).getDownloadURL();
  }
  
  formatData = (data: any) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }
    return data;
  };

  renderItem = ({item, index}: {item: any; index: number}) => {
    const {navigation} = this.props;
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
        onPress={item => navigation.navigate('Detail', {place_id: item.id})}>
        <Image source={this.getThumbnail(item.url)} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const {listplace} = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.listplace}>List Places</Text>
        </View>
        <FlatList
          data={this.formatData(listplace)}
          style={styles.flatlist}
          renderItem={this.renderItem}
          numColumns={numColumns}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatlist: {
    margin: 20,
    marginTop: 50,
  },
  item: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
    borderRadius: 15,
    height: Dimensions.get('window').width / numColumns,
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 20,
  },
  itemImage: {
    height: 200,
    width: 160,
    borderRadius: 10,
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
    position: 'absolute',
  },
  header: {
    height: 80,
    backgroundColor: '#fff',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listplace: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
