import { ButtonCircle } from '@shared-view';
import React, { useState } from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FloorList = ({data, activeTab, onPress}: any) => {
  const [listVisible, setListVisible] = useState(true);
  const changeListVisible = () => {
    setListVisible(!listVisible);  
  }

  return (
    <View style={styles.container}>
      {listVisible ? (
        <FlatList
          disableScrollViewPanResponder
          data={data}
          keyExtractor={(item, index) => item.floor_id}
          extraData={activeTab}
          contentContainerStyle={{alignItems: 'center'}}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.item,
                {backgroundColor: (item.floor_id === activeTab) ? '#00CEC9' : '#E6DFDF'},
              ]}
              onPress={() => onPress(item.floor_id)}>
              <Text>{item.floor_name}</Text>
            </TouchableOpacity>
          )}
        />
      ) : null}
      <ButtonCircle
        onPress={() => changeListVisible()}
        name={'bars'}
        size={18}
        // style={{transform: [{rotateZ: changeDeg()}]}}
        style={{margin: 6}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    borderRadius: 20,
    backgroundColor: '#fff', 
    elevation: 10,
    marginTop: 100,
    borderColor: 'lightgrey',
    borderWidth: 2
  },
  item: {
    borderRadius: 21,
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 4,
    elevation: 5,
    borderColor: 'lightgrey',
    borderWidth: 2
  },
});

export {FloorList};
