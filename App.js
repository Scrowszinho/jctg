import * as React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PsycoSpace</Text>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: '#00c6f7',
    fontWeight: 'bold',
    padding:5
  },
  container:{
    display: 'flex',
    flex: 1,
    padding: 10,
    paddingTop: 20,
  }
});