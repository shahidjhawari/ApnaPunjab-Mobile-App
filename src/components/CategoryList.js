import React from 'react';
import { FlatList, Button, StyleSheet } from 'react-native';

const CategoryList = ({ categories, fetchProducts }) => (
  <FlatList
    data={categories}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <Button title={item.name} onPress={() => fetchProducts(item.name)} />
    )}
  />
);

export default CategoryList;
