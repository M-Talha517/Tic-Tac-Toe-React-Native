import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [b11, setB11] = React.useState(' ');
  const [b12, setB12] = React.useState(' ');
  const [b13, setB13] = React.useState(' ');
  const [b21, setB21] = React.useState(' ');
  const [b22, setB22] = React.useState(' ');
  const [b23, setB23] = React.useState(' ');
  const [b31, setB31] = React.useState(' ');
  const [b32, setB32] = React.useState(' ');
  const [b33, setB33] = React.useState(' ');
  const [turn, setTurn] = React.useState('X');

  return (
    <View style={styles.container}>
      <View style = {style.row}>
        <TicTacToeButton title = {} func = {() => {}} />
      </View>
      <View style = {style.row}></View>
      <View style = {style.row}></View>
    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TicTacToeButton = (props) => {
  return (
    <Button title={props.title} onPress = {props.func} />
  );
}