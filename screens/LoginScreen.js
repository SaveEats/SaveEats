import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image
} from 'react-native'
import { auth } from '../firebase'

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // const navigation = useNavigation()

  useEffect(() => {
    const unsubiscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace('Home')
      }
    })

    return unsubiscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log(user.email)
      })
      .catch((error) => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log('Logged in With: ', user.email)
      })
      .catch((error) => alert(error.message))
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={{ marginLeft: 15 }}>
        <Image
          style={{ position: 'relative', marginTop: 12 }}
          source={require('../assets/images/Home.png')}
        />
        <Image
          style={{ position: 'absolute', marginTop: 90, marginLeft: 40 }}
          source={require('../assets/images/grupo3.png')}
        />
      </View>
      <View>
        <Text style={{ fontSize: 33, textAlign: 'center', color: '#F35B04' }}>
          Olá!
        </Text>
        <Text style={{ marginLeft: 9, marginBottom: 40, color: '#1297A6' }}>
          Seja bem vindo ao Save Eats, o aplicativo que permite que voce
          economize enquanto previne desperdício
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleLogin} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Registrar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 50 }}>
          Quero acessar com minhas redes sociais
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 20
          }}
        >
          <TouchableOpacity>
            <Image source={require('../assets/images/gol.png')} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginLeft: 30 }}>
            <Image source={require('../assets/images/Facbook.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
  button: {
    backgroundColor: '#F35B04',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#F35B04',
    borderWidth: 2
  },
  buttonOutlineText: {
    color: '#F35B04',
    fontWeight: '700',
    fontSize: 16
  }
})
