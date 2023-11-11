import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './components/Screens/HomeScreen';
import SouthScreen from './components/Screens/SouthScreen';
import SouthEastScreen from './components/Screens/SouthEastScreen'
import MidWestScreen from './components/Screens/MidWestScreen'
import NorthEastScreen from './components/Screens/NorthEastScreen'
import NorthScreen from './components/Screens/NorthScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Norte" component={NorthScreen} />
      <Stack.Screen name="Nordeste" component={NorthEastScreen} />
      <Stack.Screen name="Centroeste" component={MidWestScreen} />
      <Stack.Screen name="Sudeste" component={SouthEastScreen} />
      <Stack.Screen name="Sul" component={SouthScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}