import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import 'react-native-gesture-handler'
import MainComponent from './MainComponent'
import { Provider } from 'react-redux'
import store from './src/Redux/Store/Store'
const App = () => {
  return (
  <Provider store={store}>
     <MainComponent/>
  </Provider>
  )
}

export default App
