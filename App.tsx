import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Tabs from './src/navigation/tabs'
import DetailScreen from './src/screens/DetailScreen'

const App = () => {
  return(
    <NavigationContainer>
      {/* <Tabs /> */}
      <DetailScreen />
    </NavigationContainer>
  )
}

export default App