/* eslint-disable prettier/prettier */
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SudokuSolver from './components/SudokuSolver';
// import Body from './components/Body';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{height: '100vh'}}>
        <Text style={{color: '#000', textAlign: 'center', fontSize: 28, fontWeight: '800', marginVertical: 40,}}>Sudoku Solver</Text>
        <View>
        <SudokuSolver />
        </View>
          {/* <Body /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
