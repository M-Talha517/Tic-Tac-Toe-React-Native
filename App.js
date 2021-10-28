import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

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
  const turns = ["X", "O"]
  const [turn, setTurn] = React.useState(0);
  const [winner, setWinner] = React.useState(' ');

  const checkWinner = () => {
    if (b11 === b12 && b12 === b13 && b11 == 'X') {
      setWinner('USER 1');
    } else if (b11 === b12 && b12 === b13 && b11 == 'O') {
      setWinner('USER 2');
    } else if (b21 === b22 && b22 === b23 && b21 == 'X') {
      setWinner('USER 1');
    } else if (b21 === b22 && b22 === b23 && b21 == 'O') {
      setWinner('USER 2');
    } else if (b31 === b32 && b32 === b33 && b31 == 'X') {
      setWinner('USER 1');
    } else if (b31 === b32 && b32 === b33 && b31 == 'O') {
      setWinner('USER 2');
    } else if (b11 === b21 && b21 === b31 && b11 == 'X') {
      setWinner('USER 1');
    } else if (b11 === b21 && b21 === b31 && b11 == 'O') {
      setWinner('USER 2');
    } else if (b12 === b22 && b22 === b32 && b12 == 'X') {
      setWinner('USER 1');
    } else if (b12 === b22 && b22 === b32 && b12 == 'O') {
      setWinner('USER 2');
    } else if (b13 === b23 && b23 === b33 && b13 == 'X') {
      setWinner('USER 1');
    } else if (b13 === b23 && b23 === b33 && b13 == 'O') {
      setWinner('USER 2');
    } else if (b11 === b22 && b22 === b33 && b11 == 'X') {
      setWinner('USER 1');
    } else if (b11 === b22 && b22 === b33 && b11 == 'O') {
      setWinner('USER 2');
    } else if (b13 === b22 && b22 === b31 && b13 == 'X') {
      setWinner('USER 1');
    } else if (b13 === b22 && b22 === b31 && b13 == 'O') {
      setWinner('USER 2');
    }
  }

  const reset = () => {
    setB11(' ');
    setB12(' ');
    setB13(' ');
    setB21(' ');
    setB22(' ');
    setB23(' ');
    setB31(' ');
    setB32(' ');
    setB33(' ');
    setTurn(0);
    setWinner(' ');
  }


  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TicTacToeButton title={b11} func={ ()=>setTurn(turn+1),setB11(turns[(turn) % 2])} />
        <TicTacToeButton title={b12} func={ ()=>setTurn(turn+1), setB12(turns[(turn) % 2])} />
        <TicTacToeButton title={b13} func={ ()=>setTurn(turn+1), setB13(turns[(turn) % 2])} />
      </View>

      <View style={styles.row}>
        <TicTacToeButton title={b21} func={ ()=>setTurn(turn+1), setB21(turns[(turn) % 2])} />
        <TicTacToeButton title={b22} func={ ()=>setTurn(turn+1), setB22(turns[(turn) % 2])} />
        <TicTacToeButton title={b23} func={ ()=>setTurn(turn+1), setB23(turns[(turn) % 2])} />
      </View>

      <View style={styles.row}>
        <TicTacToeButton title={b31} func={ ()=>setTurn(turn+1), setB31(turns[(turn) % 2])} />
        <TicTacToeButton title={b32} func={ ()=>setTurn(turn+1), setB32(turns[(turn) % 2])} />
        <TicTacToeButton title={b33} func={ ()=>setTurn(turn+1), setB33(turns[(turn) % 2])} />
      </View>
      <Text>{winner}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-around',
    backgroundColor: '#eae',
  },
  container: {
    flex: 1,
    // backgroundColor: '#eae',
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
});

const TicTacToeButton = (props) => {
  return (
    <Button style={innerHeight=500, innerWidth = 100} title={props.title} onPress={props.func} />
  );
}