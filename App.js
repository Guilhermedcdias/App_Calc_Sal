import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Constants from 'expo-constants';

import FormCalc from'./pages/FormCalc.js';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>  
    <Card>
        <FormCalc/>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#6495ED',
    padding: 8,
  },
 
});
