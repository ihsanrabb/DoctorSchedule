import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Splash from '../pages/Splash'
import GetStarted from '../pages/GetStarted'


const Stack = createStackNavigator()

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen 
        name="Splash"
        component={Splash}
        options={{headerShown: false}}   
      />
      <Stack.Screen 
        name="GetStarted" 
        component={GetStarted} 
        options={{headerShown: false}} 
      />
    </Stack.Navigator>
  )
}