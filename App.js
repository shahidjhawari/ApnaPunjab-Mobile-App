import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProductScreen from './src/screens/ProductScreen'; // Correct import
import CategoryScreen from './src/screens/CategoryScreen';
import AddProductScreen from './src/screens/AddProductScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Category" component={CategoryScreen} />
        <Stack.Screen name="AddProduct" component={AddProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
