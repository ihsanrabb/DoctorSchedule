import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { LogoDoctor } from '../../assets/icon'
import { ILGetStarted } from '../../assets/illustration'
import Button from '../../components/atoms/Button'

export default function GetStarted() {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <LogoDoctor />
        <Text style={styles.title}>Pilih jadwal dokter kamu sekarang!</Text>
      </View>
      <View>
        <Button title="Login" />
        <View style={{height: 16}} />
        <Button title="Get Started" type="secondary" />
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: 'black',
    marginTop: 91,
    color: 'white'
  }
})
