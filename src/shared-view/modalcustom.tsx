import React, {useState} from 'react';
import {
  View, 
  FlatList, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Modal,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const filterValue = (data: any, valueSearch: any) => {
  if(valueSearch.length == 0) return null
  return data.filter((e: any) => e.name.includes(valueSearch))  
}

const filterPathValue = (data: any, valueSearch: any) => {
  if(data.length != 0) {
    let first_id = data[0].id;    
    data = data.map((item: any) => {
      var temp = Object.assign({}, item);
      temp.id -= first_id - 1;
      return temp;
    });    
  }
  if(valueSearch.length == 0) return null
  return data.filter((e: any) => e.name.includes(valueSearch))  
}

const SingleModal = ({data, onSearch, onVisible, onClose}: any) => {
  const [valueSearch, setValueSearch] = useState('');
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={onVisible}
    >
      <View style={styles.centeredView}>
        <View style={[styles.searchbar, styles.shadow]} >
          <Icon
            name="map-marker-alt"
            color="blue"
            size={20}
            style={{margin: 4}}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={value => setValueSearch(value)}
            placeholder="Input shop..."
          />
          <TouchableOpacity 
            onPress={() => onClose()}
          >
            <Text style={[styles.closeText, {marginLeft: 60}]}>X</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={[styles.flatlist, styles.shadow]}
          disableScrollViewPanResponder
          data={filterValue(data, valueSearch)}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => onSearch(item.id)}
              style={{backgroundColor: 'white', width: 220, padding: 6}}
            >
              <Text style={styles.nameItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
          maxToRenderPerBatch={5}
        />
      </View>
    </Modal>
  )
};

const MultiModal = ({data, onSearch, onVisible, onClose}: any) => {
  const [valueSearchFrom, setValueSearchFrom] = useState('');
  const [valueSearchTo, setValueSearchTo] = useState('');
  const [valueFrom, setValueFrom] = useState(0);
  
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={onVisible}
    >
      <View style={styles.centeredView}>
        <View style={[styles.searchbar, styles.shadow]} >
          <Icon
            name="map-marker-alt"
            color="blue"
            size={20}
            style={{margin: 4}}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={value => setValueSearchFrom(value)}
            placeholder={valueFrom.toString() || 'From...'}
          />
          <TouchableOpacity 
            onPress={() => onClose()}
          >
            <Text style={styles.closeText}>X</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          style={[styles.flatlist, styles.shadow]}
          disableScrollViewPanResponder
          data={filterPathValue(data, valueSearchFrom)}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setValueFrom(item.id)}
              style={{backgroundColor: 'white', width: 220, padding: 6}}
            >
              <Text style={styles.nameItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
          maxToRenderPerBatch={5}
        />
        <View style={[styles.searchbar, styles.shadow]} >
          <Icon
            name="map-marker-alt"
            color="blue"
            size={20}
            style={{margin: 4}}
          />
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            onChangeText={value => setValueSearchTo(value)}
            placeholder="To..."
          />
        </View>
        <FlatList
          style={[styles.flatlist, styles.shadow]}
          disableScrollViewPanResponder
          data={filterPathValue(data, valueSearchTo)}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => onSearch(valueFrom, item.id)}
              style={{backgroundColor: 'white', width: 220, padding: 6}}
            >
              <Text style={styles.nameItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
          maxToRenderPerBatch={5}
        />
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    alignSelf: 'center',
    width: 260,
    borderRadius: 2,
    paddingVertical: 4,
    paddingHorizontal: 20,
    marginTop: 12,
  },
  searchbar: {
    flexDirection: 'row',
    paddingLeft: 14,
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 8
  },
  flatlist: {
    borderRadius: 8,
    flexGrow: 0
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10
  },
  nameItem: {
    fontSize: 20,
  },
  closeText: {
    color: '#fff', 
    marginLeft: 120, 
    width: 24, 
    fontWeight: 'bold', 
    fontSize: 16, 
    backgroundColor: 'lightgray', 
    paddingLeft: 7, 
    padding: 2, 
    borderRadius: 14
  }
})

export {SingleModal, MultiModal};
