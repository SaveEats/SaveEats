import {Text, View, TouchableOpacity} from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'
// import MainContainer from '../navigation/MainContainer'; 

export default function HomeScreen({navigation}) {
  navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message));
  }

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
				<Text
					onPress={() => navigation.navigate('Home')}
					style={{ fontSize: 26, fontWeight: 'bold'}}
				>
					Email: {auth.currentUser?.email}
				</Text>
        <TouchableOpacity
        onPress={handleSignOut}
        style={{backgroundColor: '#F35B04',
            width: '60%',
            padding: 15,
            borderRadius: 10,
            alignItems: 'center',
            marginTop: 60,}}
      >
        <Text style={{color: 'white',fontWeight: '700',fontSize: 16,}}>Sign out</Text>
      </TouchableOpacity>
			</View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   button: {
//     backgroundColor: '#F35B04',
//     width: '60%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 60,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//   }
// })