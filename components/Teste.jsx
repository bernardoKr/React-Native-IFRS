import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function App() {
  const [carro, setCarro] = useState({
    marca: 'Ford',
    modelo: 'Mustang',
    ano: '1964',
    cor: 'vermelha',
  })
  const atualizaCor = () => {
    setCarro((previousState) => {
      if (carro.cor == 'azul') {
        return { ...previousState, cor: 'vermelha' }
      } else {
        return { ...previousState, cor: 'azul' }
      }
    })
  }
  return (
    <View style={styles.container}>
      <Text>O meu carro {carro.marca}</Text>
      <Text>
        Este é um {carro.modelo} de cor {carro.cor} de {carro.ano}!
      </Text>
      <Button title="Mudar a cor" onPress={atualizaCor} />
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
})
