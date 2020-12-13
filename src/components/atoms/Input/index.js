import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default function Input({label, value, onChangeText, secureTextEntry}) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        style={styles.input} 
        value={value}
        onChangeText={onChangeText}  
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#E9E9E9',
    borderRadius: 10,
    padding: 12
  },
  label: {
    fontSize: 16,
    color: '#7D8797',
    marginBottom: 6,
    fontFamily: 'Nunito-Regular'
  }
})
