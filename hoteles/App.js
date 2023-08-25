import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import AppNavigator from './appNavigator'; // Asegúrate de que la ruta sea correcta

export default function App() {
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
