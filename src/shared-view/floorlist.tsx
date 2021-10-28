import React, { useState } from 'react'
import { 
  SafeAreaView, 
  FlatList, 
  StyleSheet, 
  Text, 
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const FloorList = ({data, activeTab, onPress}: (any)) => {
  const [active, setActive] = useState(activeTab);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        disableScrollViewPanResponder
        data={data}
        keyExtractor={(item) => item.floor_id}
        extraData={active}
        contentContainerStyle={{
          alignItems: 'center'
        }}
        renderItem={({item, index}) =>
          <TouchableOpacity
            style={[styles.item, item.floor_id == active ? styles.active : null]}
            onPress={() => onPress(item.floor_id)}
          >
            <Text>{item.floor_name}</Text>
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    width: 40,
    borderColor: '#EFEAEA',
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: '#E6DFDF',
  },
  item: {
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  active: {
    backgroundColor: 'red',
  },
})

export { FloorList }