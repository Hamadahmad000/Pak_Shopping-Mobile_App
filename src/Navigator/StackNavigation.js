import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
const StackNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>
     <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
     <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
     <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})