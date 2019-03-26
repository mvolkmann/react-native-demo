import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import { red } from 'ansi-colors';

export default function Hello() {
  const [name, setName] = useState('World');

  return (
    <View style={styles.hello}>
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput onChangeText={setName} style={styles.input} value={name} />
      </View>
      <View>
        <Text>Hello, {name}!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  hello: {
    borderColor: 'red',
    borderWidth: 1,
    padding: 10,
    width: 200
  },
  input: {
    borderColor: 'gray',
    borderRadius: 4,
    borderWidth: 1,
    padding: 4
  },
  label: {
    fontWeight: 'bold'
  }
});