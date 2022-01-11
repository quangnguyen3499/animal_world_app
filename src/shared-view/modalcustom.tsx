import { ButtonCircle } from '@shared-view';
import React, {useState} from 'react';
import {
  View, 
  FlatList, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome5';

const filterValue = (data: any, valueSearch: any) => {
  if(valueSearch.length == 0) return null
  return data.filter((e: any) => e.name.includes(valueSearch)).slice(0,5)
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
  return data.filter((e: any) => e.name.includes(valueSearch)).slice(0,5)
}

const SingleModal = ({data, onSearch, onVisible, onClose, isSearchPath}: any) => {
  const [valueSearch, setValueSearch] = useState('');
  const [showRecently, setShowRecently] = useState(true);

  return (
    <Modal
      isVisible={onVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropColor='#fff'
      backdropOpacity={1}
      style={styles.modal}
    >
      <View style={styles.centeredView}>
        <View style={{backgroundColor: '#388AA4', padding: 20, borderBottomLeftRadius: 12, borderBottomRightRadius: 12}}>
          <ButtonCircle
            onPress={() => onClose()}
            name={'arrow-left'}
            size={20}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -50}}>
            <Icon
              name="search-location"
              color="lightgray"
              size={20}
              style={{margin: 8}}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              onChangeText={value => {
                setValueSearch(value)
                setShowRecently(value.length == 0)
              }}
              placeholder="Search here..."
              style={[styles.searchbar, styles.shadow]}
            />
          </View>
        </View>
        <FlatList
          style={[styles.flatlist, {marginTop: -30, marginLeft: 70, borderRadius: 4}]}
          disableScrollViewPanResponder
          data={isSearchPath ? filterPathValue(data, valueSearch) : filterValue(data, valueSearch)}
          keyExtractor={(item, index) => item.id}
          contentContainerStyle={{alignItems: 'center'}}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => onSearch(item.id)}
              style={{backgroundColor: 'white', width: 260, padding: 4, elevation: 4, borderBottomWidth: 0.2}}
            >
              <Text style={styles.nameItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        {showRecently ? (
          <View style={{margin: 10}}>
            <Text style={{margin: 10, marginTop: 26, fontSize: 16}}>Recently</Text>
            <FlatList
              style={styles.flatlist}
              disableScrollViewPanResponder
              data={data.slice(0,10)}
              keyExtractor={(item, index) => item.id}
              contentContainerStyle={{alignItems: 'center'}}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  style={{backgroundColor: 'white', width: 340, borderBottomWidth: 0.2, borderRadius: 12, flexDirection: 'row'}}
                >
                  <Icon
                    name="history"
                    color="lightgray"
                    size={20}
                    style={{margin: 10}}
                  />
                  <Text style={styles.nameItem}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View> ) : (null)
        }
      </View>
    </Modal>
  )
};

const MultiModal = ({data, onSearch, onVisible, onClose}: any) => {
  const [valueFrom, setValueFrom] = useState('');
  const [searchFromVisible, setSearchFromVisible] = useState(false);
  const [searchToVisible, setSearchToVisible] = useState(false);

  return (
    <Modal
      isVisible={onVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropColor='#fff'
      backdropOpacity={1}
      style={styles.modal}
    >
      <View style={styles.centeredView}>
        <View style={{backgroundColor: '#388AA4', padding: 16, borderBottomLeftRadius: 16, borderBottomRightRadius: 16}}>
          <ButtonCircle
            onPress={() => onClose()}
            name={'arrow-left'}
            size={20}
          />
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -50}}>
            <Icon
              name="record-vinyl"
              color="lightgray"
              size={20}
              style={{margin: 8}}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              onFocus={() => setSearchFromVisible(true)}
              placeholder={'From...'}
              style={[styles.searchbar, styles.shadow]}
              // value={filterPathValue(data, valueFrom)[0].name}
            />
            <SingleModal
              onVisible={searchFromVisible}
              onSearch={(value: any) => {
                setValueFrom(value)
                setSearchFromVisible(false)                                          
              }}
              data={data}
              isSearchPath={true}
              onClose={() => setSearchFromVisible(false)}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
            <Icon
              name="map-marker-alt"
              color="lightgray"
              size={20}
              style={{margin: 10}}
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="always"
              onFocus={() => setSearchToVisible(true)}
              placeholder="To..."
              style={[styles.searchbar, styles.shadow]}
            />
            <SingleModal
              onVisible={searchToVisible}
              onSearch={(value: any) => {
                onSearch(valueFrom, value)
                setSearchToVisible(false)
              }}
              data={data}
              isSearchPath={true}
              onClose={() => setSearchToVisible(false)}
            />
          </View>
        </View>
        <View style={{margin: 10}}>
          <Text style={{margin: 10, fontSize: 16}}>Recently</Text>
          <FlatList
            style={styles.flatlist}
            disableScrollViewPanResponder
            data={data.slice(0,10)}
            keyExtractor={(item, index) => item.id}
            contentContainerStyle={{alignItems: 'center'}}
            renderItem={({item, index}) => (
              <TouchableOpacity
                style={{backgroundColor: 'white', width: 340, borderBottomWidth: 0.2, borderRadius: 12, flexDirection: 'row'}}
              >
                <Icon
                  name="history"
                  color="lightgray"
                  size={20}
                  style={{margin: 10}}
                />
                <Text style={styles.nameItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </Modal>
  )
};

const styles = StyleSheet.create({
  modal: {
    margin: 0,
    // padding: 20
  },
  centeredView: {
    flex: 1,
  },
  searchbar: {
    width: '80%',
    flexDirection: 'row',
    paddingLeft: 14,
    borderRadius: 20,
    backgroundColor: 'white',
    marginVertical: 8
  },
  flatlist: {
    borderRadius: 8,
    flexGrow: 0
  },
  shadow: {
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 10
  },
  nameItem: {
    fontSize: 20,
    margin: 10
  }
})

export {SingleModal, MultiModal};
