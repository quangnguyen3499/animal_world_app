import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const MarkedScreen = ({}) => {
  return(
    <View style={styles.container}>
      <Text>Marked Screen</Text>
      <Button
        title="Click here"
        onPress={() => {}}
      />
    </View>
  )
}

export default MarkedScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
})