import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Row = (props) => (
  <View style={styles.row}>
    {props.children}
  </View>
)

const Table = (props) =>
  <View style={styles.table}>
    {props.children}
  </View>

const Cell = ({ value, idx }) => (
  <View style={[{ flexGrow: 1, flex: 1 }, styles.border]}>
    <Text style={styles.value}>{value}</Text>
  </View>
)

const Header = ({ headers }) =>
  <Row>
    {headers.map((header, idx) => (
      <Cell value={header} idx={idx} key={idx} />
    ))}
  </Row>

const Rows = ({ data }) => (
  data.map((d, idx) => (
    <Row key={idx}>
      {d.map((v, key) => <Cell value={v} idx={key} key={key} />)}
    </Row>
  ))
)

const styles = StyleSheet.create({
  table: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    height: 30,
  },
  border: {
    padding: 2,
    borderColor: "black",
    borderWidth: 1
  },
  value: {
    flex: 1,
    alignSelf: 'center',
  }
});

export {
  Table,
  Header,
  Rows,
}