import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProductScreen = ({ route }) => {
  const { productId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <Text style={styles.text}>Product ID: {productId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  text: { fontSize: 18 },
});

export default ProductScreen;
