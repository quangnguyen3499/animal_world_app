import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/navigation/tabs'
import DetailScreen from './src/screens/DetailScreen'
import MapScreen from './src/screens/MapScreen'

const App = () => {
  return(
    <NavigationContainer>
      {/* <Tabs /> */}
      {/* <DetailScreen /> */}
      <MapScreen />
    </NavigationContainer>
  )
}

export default App