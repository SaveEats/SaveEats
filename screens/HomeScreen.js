import React from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity, ScrollView} from 'react-native';
// import { useNavigation } from '@react-navigation/native'

export default function HomeScreen({navigation}) {
    return (
      <View>
        <View style={estilo.view1}>
            <Text
            style={estilo.text1}
            >Tv. Bom jardim, 445</Text>
            <Image 
            style={estilo.img1}
            source={require('../assets/images/sinal.png')} />

        </View>
        
        <Text
        style={estilo.text2}
        >Bom dia, Almir!</Text>
      
    
        <View>

          <View style={estilo.view2}>
             
            <TouchableOpacity style={estilo.touch1}>
              <Text style={estilo.text4}>Categoria</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate("Feed")} >
              <Text style={estilo.text5}>Feed</Text>
            </TouchableOpacity>

            
          </View>
            
        <ScrollView horizontal>    
              <View style={estilo.view3}>

                  <View>
                      <Image
                      style={estilo.img2}
                      source={require('../assets/images/hortifruti.png')}
                      />
                      <Text
                      style={estilo.text6}
                      >hortifruti</Text>
                  </View>

                  <View style={estilo.view4}>
                    <Image 
                    source={require('../assets/images/limpeza.png')}
                    />
                    <Text
                    style={estilo.text7}
                    >limpeza</Text>
                  </View>

                  <View>
                    <Image 
                    style={estilo.img3}
                    source={require('../assets/images/pao.jpg')} />
                    <Text
                    style={estilo.text18}
                    >padaria</Text>
                  </View>
                  <View>
                    <Image 
                    style={estilo.img3}
                    source={require('../assets/images/bebida.jpeg')} />
                    <Text
                    style={estilo.text18}
                    >bebida</Text>
                  </View>
                  
                  
                  

              </View>
        </ScrollView>
        </View>
            
       <ScrollView>      
          <View>

                <View style={estilo.view5}>
                  <Image
                  source={require('../assets/images/Vector.png')}
                  />
                  <Text style={estilo.text8}>Explorar</Text>
                </View>
              


              <View style={estilo.view6} >
                
                <Image
                style={estilo.img4} 
                source={require('../assets/images/paeisum.png')}
                />

                <View style={estilo.view7}>
                    <Text style={estilo.text9}>Limpador de Vidros </Text>
                    
                    <Text style={estilo.text10}>Supermercado Lider Pedreira</Text>
                    
                    <Text style={estilo.text11}>R$ 6,99</Text>
                </View>


              </View>
            <View style={estilo.view8} >
              
              <Image
              style={estilo.img5} 
              source={require('../assets/images/paeisum.png')}
              />

              <View style={estilo.view9}>
                <Text style={estilo.text12}>Limpador de Vidros </Text>
                <Text>Supermercado Lider Pedreira</Text>
                <Text style={estilo.text13}>R$ 6,99</Text>
              </View>


            </View>
            <View style={estilo.view10} >
              
              <Image
              style={estilo.img6} 
              source={require('../assets/images/paeisum.png')}
              />

              <View style={estilo.view11}>
                <Text style={estilo.text14}>Limpador de Vidros </Text>
                <Text>Supermercado Lider Pedreira</Text>
                <Text style={estilo.text15}>R$ 6,99</Text>
              </View>

            </View>

              
            <View style={estilo.view10} >
              <Image
              style={estilo.img6} 
              source={require('../assets/images/paeisum.png')}
              />

              <View style={estilo.view11}>
                <Text style={estilo.text14}>Limpador de Vidros </Text>
                <Text>Supermercado Lider Pedreira</Text>
                <Text style={estilo.text15}>R$ 6,99</Text>
              </View>

            </View>
            <View style={estilo.view10} >
              <Image
              style={estilo.img6} 
              source={require('../assets/images/paeisum.png')}
              />

              <View style={estilo.view11}>
                <Text style={estilo.text14}>Limpador de Vidros </Text>
                <Text>Supermercado Lider Pedreira</Text>
                <Text style={estilo.text15}>R$ 6,99</Text>
              </View>

            </View>
            <View style={estilo.view10} >
              <Image
              style={estilo.img6} 
              source={require('../assets/images/paeisum.png')}
              />

              <View style={estilo.view11}>
                <Text style={estilo.text14}>Limpador de Vidros </Text>
                <Text>Supermercado Lider Pedreira</Text>
                <Text style={estilo.text15}>R$ 6,99</Text>
              </View>

            </View>
            <View style={estilo.view10} >
              <Image
              style={estilo.img6} 
              source={require('../assets/images/paeisum.png')}
              />

              <View style={estilo.view11}>
                <Text style={estilo.text14}>Limpador de Vidros </Text>
                <Text>Supermercado Lider Pedreira</Text>
                <Text style={estilo.text15}>R$ 6,99</Text>
              </View>

            </View>
            <View style={estilo.view10} >
              <Image
              style={estilo.img6} 
              source={require('../assets/images/paeisum.png')}
              />

              <View style={estilo.view11}>
                <Text style={estilo.text14}>Limpador de Vidros </Text>
                <Text>Supermercado Lider Pedreira</Text>
                <Text style={estilo.text15}>R$ 6,99</Text>
              </View>

            </View>

            
          </View>
      </ScrollView>
        

          

      </View>

      
);

}


  const estilo = StyleSheet.create({
    view1: { flexDirection: 'row' },
    
    view2:{ marginTop:10, width: 120,marginLeft:90, flexDirection:'row' },
    
    view3:{ flexDirection:'row', marginTop: 5 },
    
    view4:{ marginLeft:20 },
    
    view5:{ marginTop: 10, marginLeft:10 },
    
    view6:{ flexDirection: 'row' },

    view7:{ marginLeft: 20, marginTop: 20 },
    
    view8:{ flexDirection: 'row' },
    
    view9:{marginLeft: 20, marginTop: 20 },	

    view10:{ flexDirection: 'row' },

    view11:{marginLeft: 20, marginTop: 20 },
        
    img1:{ marginTop:28, marginLeft:2 },

    img2:{ marginLeft:10},
  
    img3:{ marginLeft:10, borderRadius:4 },
  
    img4:{ marginTop:20, resizeMode: 'contain',marginLeft:10 },
  
    img5:{ marginTop:20, resizeMode: 'contain', marginLeft:10 },
  
    img6:{marginTop:20, resizeMode: 'contain', marginLeft:10 },

    text1:{ marginTop:22, fontSize:12, marginLeft:12 },
      
    text2: {  marginTop:5,  marginLeft: 12,color:'#070707' },
     
    touch1:{  marginRight:40 },
     
    text4:{  color:'#F35B04', textDecorationLine:'underline' },

    text5:{ color:'#a7a7a7' },

    text6:{ fontSize:12,  textAlign:'center', color: '#a7a7a7' },

    text7:{ fontSize:12, textAlign:'center', color: '#a7a7a7' },

    text8:{  marginLeft: 30, marginTop: -22, fontSize: 15, color: '#000000'},
    
    text9:{ color:`#000000`, fontSize: 18 },
  
    text10:{  color:`#000000`, fontSize: 14 },
  
    text11:{ color: `#F35B04`,  marginTop:3 },
  
    text12:{color:`#000000`, fontSize: 18 },
  
    text13:{color: `#F35B04`,  marginTop:3 },

    text14:{ color:`#000000`, fontSize: 18 },

    text15:{ color: `#F35B04`, marginTop:3 },
  
    text16:{ backgroundColor: '#F35B04',  height:40,  marginTop:10 },

    text18:{ fontSize:12, textAlign:'center', color: '#a7a7a7', marginLeft:7 },
    
    
        
        })
      
