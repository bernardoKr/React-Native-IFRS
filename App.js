import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useState, useEffect } from 'react'

import Teste from './components/Teste.jsx'

export default function App() {
  const [count, setCount] = useState(0)
  const [calculation, setCalculation] = useState(0)

  useEffect(() => {
    setCalculation(() => count * 2)
  }, [count ])

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text style={styles.center}>
        <Teste />
      </Text>

      <Text style={(styles.center, styles.space)}>
        <Text>Você clicou {count} vez(es)</Text>
        <Text>Eu renderizei {count} vezes!</Text>
        <Button title="Clique Aqui" onPress={() => setCount((c) => c + 1)} />
        <Text>Cálculo: {calculation}</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
  },
  space: {
    marginTop: '100px',
  },
})
