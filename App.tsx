
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import { Calculator } from './src/screens/Calculator';
import { globalStyles } from './src/theme/globalTheme';

const App = () => {
  return (
    <SafeAreaView style={globalStyles.background}>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <Calculator />
    </SafeAreaView>
  );
};

export default App;
