import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { LogoDoctor } from '../../assets/icon'
import Input from '../../components/atoms/Input'
import Link from '../../components/atoms/Link'
import Button from '../../components/atoms/Button'
import Gap from '../../components/atoms/Gap'
import auth from '@react-native-firebase/auth'

export default function Login() {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleLogin = () => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      alert('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        alert('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        alert('That email address is invalid!');
      }

      console.error(error);
    })
  }

  return (
    <View style={styles.page}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LogoDoctor />
        <Text style={styles.title}>Masuk dan pilih jadwal dokter kamu</Text>
        <Input 
          label="Email Address" 
          value={email}
          onChangeText={(val) => setEmail(val)}  
        />
        <Gap height={24}/>
        <Input 
          label="Password"
          value={password}
          onChangeText={(val) => setPassword(val)}  
          secureTextEntry
        />
        <Gap height={15}/>
        <Link title="Forgot Password" size={12}/>
        <Gap height={40}/>
        <Button title="Sign in" onPress={handleLogin} />
        <Gap height={30}/>
        <Link title="Create New Account" size={16} align="center"/>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 20,
    fontFamily: 'Nunito-Semibold',
    marginVertical: 40,
    maxWidth: 153
  }
})
