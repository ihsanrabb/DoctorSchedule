import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { LogoDoctor } from '../../assets/icon'
import { ILGetStarted } from '../../assets/illustration'
import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.page}>
      <View>
        <LogoDoctor />
        <Text style={styles.title}>Pilih jadwal dokter kamu sekarang!</Text>
      </View>
      <View>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        <Gap height={16} />
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
    marginTop: 91,
    color: 'white',
    fontFamily: 'Nunito-SemiBold'
  }
})
