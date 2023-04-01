import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import Home from '../screens/Home'
import MyAddress from '../screens/MyAddress'
import AddAddress from '../screens/AddAddress'
import Checkout from '../screens/Checkout'
import Setting from '../screens/Setting'
const StackNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
     <Stack.Navigator>
     <Stack.Screen name='splash' component={Splash} options={{headerShown:false}}/>
     <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
     <Stack.Screen name='Signup' component={Signup} options={{headerShown:false}}/>
     <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
     <Stack.Screen name='MyAddress' component={MyAddress} options={{headerShown:false}}/>
     <Stack.Screen name='AddAddress' component={AddAddress} options={{headerShown:false}}/>
     <Stack.Screen name='Checkout' component={Checkout} options={{headerShown:false}}/>
     <Stack.Screen name='Setting' component={Setting} options={{headerShown:false}}/>
     </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation

const styles = StyleSheet.create({})