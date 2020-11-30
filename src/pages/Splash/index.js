import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { LogoDoctor } from '../../assets/icon'

export default function Splash() {
  return (
    <View style={styles.page}>
      <LogoDoctor />
      <Text style={styles.text}>Doctor Schedule</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20
  }
})
