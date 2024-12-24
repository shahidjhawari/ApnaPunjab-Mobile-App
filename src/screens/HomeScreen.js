import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://apna-punjab-backend.vercel.app/api/categories') // Update with your API URL
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate('Category', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.categoryItem}
            onPress={() => handleCategoryPress(item.name)}>
            <Text style={styles.categoryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  categoryItem: { padding: 10, backgroundColor: '#f8f8f8', marginVertical: 5, borderRadius: 5 },
  categoryName: { fontSize: 16 },
});
