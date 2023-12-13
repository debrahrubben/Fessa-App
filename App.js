// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        source={{ uri: 'https://fessa.netlify.app' }}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});

export default App;
