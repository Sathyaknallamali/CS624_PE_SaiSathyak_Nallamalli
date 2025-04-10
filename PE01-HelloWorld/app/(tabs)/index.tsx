import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Profile</Text>
      <Text style={styles.text}>Sai Sathyak Nallamalli</Text>
      <Text style={styles.text}>MS in Computer Science</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 5,
  },
});