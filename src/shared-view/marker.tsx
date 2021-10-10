import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

const Marker = ({onPress, top, left}: (any)) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[styles.marker, {top, left}]} 
  />
)

const styles = StyleSheet.create({
  marker: {
    height: 8,
    width: 8,
    borderRadius: 4, 
    backgroundColor: 'red', 
    position: 'absolute',
    opacity: 0.8
  }
})

export { Marker }