/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useContext} from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';

import {appContext} from './src/context';
import Stage_one from './src/components/stage_one';
import Stage_two from './src/components/stage_two';

const App = () => {
  const contextType = useContext(appContext);

  return (
    <ScrollView style={styles.sectionContainer}>
      <View>
        {contextType.state.stage === 1 ? <Stage_one /> : <Stage_two />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 42,
    paddingHorizontal: 24,
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
