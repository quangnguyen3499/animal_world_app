import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const LocationScreen = ({}) => {
  return(
    <View style={styles.container}>
      <Text>Location</Text>
      <Button
        title="Click here"
        onPress={() => {}}
      />
    </View>
  )
}

export default LocationScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow'
  },
})