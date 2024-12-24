import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function CategoryScreen({ route }) {
  const { category } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`https://apna-punjab-backend.vercel.app/api/products?category=${category}`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error(error));
  }, [category]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products in {category}</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
            <Text style={styles.productName}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  productItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  productImage: { width: 50, height: 50, marginRight: 10, borderRadius: 5 },
  productName: { fontSize: 16 },
});
