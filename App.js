import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import DiscoverList from './src/screens/DiscoverList'
import Blogpost from './src/screens/Blogpost'
import { AntDesign, Fontisto, Entypo } from '@expo/vector-icons'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Blog Post'
        screenOptions={{
          headerTitleStyle:{
            fontWeight:'100',
            fontSize:50,
          },
          headerStyle: {
            height: 120, // Specify the height of your custom header
          },
          headerTintColor:'#574f4f'
        }}
      >
        <Stack.Screen 
          options={{
            headerRight:()=><AntDesign name="search1" size={30} color="#574f4f" />,
            headerLeft:()=><Fontisto name="nav-icon-grid-a" size={30} color="#574f4f" />,
            headerRightContainerStyle:{
              marginEnd:20
            },
            headerLeftContainerStyle:{
              marginStart:20
            }
          }}
          name='Discover' 
          component={DiscoverList}
        />
        <Stack.Screen 
          name='Blog Post' 
          component={Blogpost}
          options={{
            headerShown:false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
