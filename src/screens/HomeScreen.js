import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator, StyleSheet } from 'react-native';

const HomeScreen = () => {
  const [categories, setCategories] = useState([]); // State for categories
  const [loading, setLoading] = useState(true); // State for loading indicator
  const API_ENDPOINT = 'http://192.168.100.100:5000/api/categories'; // Replace with your API

  // Fetch categories from API
  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log data to inspect the structure
        setCategories(data); // Update categories state
        setLoading(false); // Disable loading indicator
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
        setLoading(false); // Disable loading even if there's an error
      });
  }, []);

  // Render individual category item
  const renderCategory = ({ item }) => (
    <View style={styles.categoryItem}>
      <Text style={styles.categoryText}>{item.name}</Text>
    </View>
  );

  // Main render
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item._id.toString()} // Ensure `_id` exists in the API response
        />
      )}
    </View>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  categoryItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderRadius: 6,
    elevation: 1, // Shadow for Android
  },
  categoryText: {
    fontSize: 18,
    color: '#333333',
  },
});

export default HomeScreen;
