import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';

const CategoryScreen = ({ route }) => {
  const { categoryId } = route.params;
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://192.168.100.100:5000/api/products?category=${categoryId}`);
        const result = await response.json();
        setProducts(result || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => <ProductCard product={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
});

export default CategoryScreen;
