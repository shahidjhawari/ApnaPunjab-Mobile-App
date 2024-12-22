import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ product }) => (
  <View style={styles.card}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.name}>{product.name}</Text>
  </View>
);

const styles = StyleSheet.create({
  card: { marginBottom: 20, padding: 10, borderWidth: 1, borderRadius: 8 },
  image: { width: '100%', height: 150, borderRadius: 8 },
  name: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
});

export default ProductCard;
