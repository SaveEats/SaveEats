import { StyleSheet, Text, View, TouchableOpacity, Image  } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message));
  }

  return (
    <>
    <View>
      <View style={{flexDirection: 'row'}}>
        <Text
        style={{marginTop:22, fontSize:12,marginLeft:12}}
        >Tv. Bom jardim, 445
        </Text>
        <Image 
        style={{marginTop:28, marginLeft:2}}
        source={require('../assets/images/sinal.png')} />
      </View>
      
      <Text
      style={{marginTop:5, marginLeft: 12, color:'#070707'}}
      >Bom dia, Almir!
      </Text>
      
    <View>
      <View style={{marginTop:10,width: 120,marginLeft:90,flexDirection:'row'}}>
          
        <TouchableOpacity style={{marginRight:40}}>
          <Text style={{color:'#F35B04',textDecorationLine:'underline'}}>Categoria</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={{color:'#a7a7a7'}}>Feed</Text>
        </TouchableOpacity>
      </View>
        
      <View style={{flexDirection:'row', marginTop: 5}}>
        <View>
          <Image
          style={{marginLeft:10}}
          source={require('../assets/images/hortifruti.png')}
          />
          <Text
          style={{fontSize:12, textAlign:'center', color: '#a7a7a7'}}
          >hortifruti</Text>
        </View>

        <View style={{marginLeft:20}}>
          <Image 
          source={require('../assets/images/limpeza.png')}
          />
          <Text
          style={{fontSize:12, textAlign:'center', color: '#a7a7a7'}}
          >limpeza</Text>
        </View>

        <View>
          <Image 
          style={{marginLeft:10}}
          source={require('../assets/images/comida.png')} />
        </View>
      </View>

    </View>    
        <View>

            <View style={{marginTop: 10, marginLeft:10}}>
              <Image
              source={require('../assets/images/Vector.png')}
              />
              <Text style={{marginLeft: 30,marginTop: -22, fontSize: 15, color: '#000000'}}>Explorar</Text>
            </View>
          


          <View style={{flexDirection: 'row'}} >
            
            <Image
            style={{marginTop:20, resizeMode: 'contain', marginLeft:10 }} 
            source={require('../assets/images/Vector.png')}
            />

            <View style={{marginLeft: 20, marginTop: 20}}>
                <Text style={{color:`#000000`, fontSize: 18}}>Limpador de Vidros </Text>
                
                <Text style={{color:`#000000`,fontSize: 14}}>Supermercado Lider Pedreira</Text>
                
                <Text style={{color: `#F35B04`, marginTop:3}}>R$ 6,99</Text>
            </View>


          </View>
        <View style={{flexDirection: 'row'}} >
          
          <Image
          style={{marginTop:20, resizeMode: 'contain', marginLeft:10 }} 
          source={require('../assets/images/Paeisum.png')}
          />

          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text style={{color:`#000000`, fontSize: 18}}>Limpador de Vidros </Text>
            <Text>Supermercado Lider Pedreira</Text>
            <Text style={{color: `#F35B04`, marginTop:3}}>R$ 6,99</Text>
          </View>


        </View>
        <View style={{flexDirection: 'row'}} >
          
          <Image
          style={{marginTop:20, resizeMode: 'contain', marginLeft:10}} 
          source={require('../assets/images/Paeisum.png')}
          />

          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text style={{color:`#000000`, fontSize: 18}}>Limpador de Vidros </Text>
            <Text>Supermercado Lider Pedreira</Text>
            <Text style={{color: `#F35B04`, marginTop:3}}>R$ 6,99</Text>
          </View>

        </View>

          
        <View style={{flexDirection: 'row'}} >
          <Image
          style={{marginTop:20, resizeMode: 'contain', marginLeft:10}} 
          source={require('../assets/images/Paeisum.png')}
          />

          <View style={{marginLeft: 20, marginTop: 20}}>
            <Text style={{color:`#000000`, fontSize: 18}}>Limpador de Vidros </Text>
            <Text>Supermercado Lider Pedreira</Text>
            <Text style={{color: `#F35B04`, marginTop:3}}>R$ 6,99</Text>
          </View>

        </View>

        
        </View>

        <View >
            <Text style={{backgroundColor: '#F35B04',height:40, marginTop:10, }}></Text>
        </View>

          

      </View>


    <View style={styles.container}>  
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
    </>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
})