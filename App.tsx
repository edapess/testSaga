import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Provider} from 'react-redux';
import store from './src/store/config';
import {HomeScreen} from './src/screens/Home.screen';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.safeWrapper}>
        <HomeScreen />
      </SafeAreaView>
    </Provider>
  );
}
const styles = StyleSheet.create({
  safeWrapper: {
    backgroundColor: 'black',
  },
});
export default App;
