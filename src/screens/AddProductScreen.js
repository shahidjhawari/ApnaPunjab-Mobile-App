import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AddProductScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Add Product Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AddProductScreen;
