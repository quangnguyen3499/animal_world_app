import { ButtonCircle } from '@shared-view';
import React, { useState } from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const FloorList = ({data, activeTab, onPress}: any) => {
  const [listVisible, setListVisible] = useState(true);
  const changeListVisible = () => {
    setListVisible(!listVisible);  
  }

  return (
    <SafeAreaView style={styles.container}>
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
        style={{position: 'absolute', top: 200, left: 5}}
        // style={{transform: [{rotateZ: changeDeg()}]}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 180,
    width: 46,
    borderRadius: 20,
    left: 4
  },
  item: {
    borderRadius: 21,
    height: 42,
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginVertical: 4,
    shadowColor: '#000',
    elevation: 3,
    borderWidth: 0.1,
  },
});

export {FloorList};
