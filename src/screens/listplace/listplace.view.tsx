import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

const numColumns = 2;

interface Props {
  navigation ?: any
  doGetListPlace: () => void
}

interface State {

}

export class ListPlaceComponent extends Component<Props, State> {
  constructor(props: any) {
    super(props);
  }

  formatData = (data: any, numColumns: any) => {
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
    const { navigation } = this.props;
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        style={styles.item}
        key={index}
        onPress={() => navigation.navigate(item.screen)}
      >
        <Image source={item.backgroundImage} style={styles.itemImage} />
        <Text style={styles.itemText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    const data = [
      {
        id: '1',
        title: 'Lịch trình',
        backgroundImage: require(''),
        screen: "",
      },
      {
        id: '2',
        title: 'Món ăn hằng ngày',
        backgroundImage: require(''),
        screen: "",
      },
      {
        id: '3',
        title: 'Tình trạng sức khỏe',
        backgroundImage: require(''),
        screen: "",
      },
      {
        id: '4',
        title: 'Thể dục',
        backgroundImage: require(''),
        screen: "",
      },
    ];

    return (
      <View style={styles.container}>        
        <FlatList
          data={this.formatData(data, numColumns)}
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  auth: {
    fontSize: 20,
    fontWeight: 'bold',
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
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    marginVertical: 20,
  },
  itemImage: {
    height: 200,
    width: 160,
    position: 'absolute',
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
  },
});