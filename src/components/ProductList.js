import React from 'react';
import { FlatList, View, Text, Image, StyleSheet } from 'react-native';

const ProductList = ({ products }) => (
  <FlatList
    data={products}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => (
      <View style={styles.productCard}>
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text>{item.name}</Text>
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  productCard: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  productImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
});

export default ProductList;
