import React from "react";

import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'


export default function FeedScreen({navigation}){
    navigation = useNavigation()
    return(
        <View>
            <View style={estilo.view1}>
                <Text
                style={estilo.text1}
                >Tv. Bom jardim, 445</Text>
                <Image 
                style={estilo.img1}
                source={require('../assets/images/sinal.png')} />

            </View>

            
            <Text style={estilo.text2} >Bom dia, Almir!</Text>

            <View style={estilo.view2}>
                
                <TouchableOpacity style={estilo.touch1}>
                <Text style={estilo.text4}>Categorias</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                <Text style={estilo.text5}>Feed</Text>
                </TouchableOpacity>

            </View>

        <ScrollView showsVerticalScrollIndicator={false} >
            <View>
                    <View style={estilo.view3}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/fátima.png')} />
                        </TouchableOpacity>

                        <Text style={estilo.text8}>Fátima da silva </Text>

                        <Image
                        style={{marginLeft:15,height:14,marginTop:5}}
                        source={require('../assets/images/estrela.png')}/>
                    </View>
                    
                    <View style={{flexDirection:'row',marginLeft:82,marginTop:35,position:'absolute'}}>
                        <Text style={estilo.text6}>09:20</Text>
                        <Text style={estilo.text6}>Cidade velha</Text>
                        <Text style={estilo.text7}>Hortifruti</Text>
                    </View>

                    
                    <View style={{flexDirection:'row',position:'absolute',marginTop:65}}>
                        <Text style={estilo.text9}>Alface americano</Text>
                        <Text style={estilo.text10}>R$ 2,90</Text>
                    </View>

                    <Image
                    style={{marginTop:12,marginLeft:85}}
                    source={require('../assets/images/alface.png')}/>
            </View>
            <View>
                    <View style={estilo.view3}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/fátima.png')} />
                        </TouchableOpacity>

                        <Text style={estilo.text8}>Fátima da silva </Text>

                        <Image
                        style={{marginLeft:15,height:14,marginTop:5}}
                        source={require('../assets/images/estrela.png')}/>
                    </View>
                    
                    <View style={{flexDirection:'row',marginLeft:82,marginTop:35,position:'absolute'}}>
                        <Text style={estilo.text6}>09:20</Text>
                        <Text style={estilo.text6}>Cidade velha</Text>
                        <Text style={estilo.text7}>Hortifruti</Text>
                    </View>

                    
                    <View style={{flexDirection:'row',position:'absolute',marginTop:65}}>
                        <Text style={estilo.text9}>Alface americano</Text>
                        <Text style={estilo.text10}>R$ 2,90</Text>
                    </View>

                    <Image
                    style={{marginTop:12,marginLeft:85}}
                    source={require('../assets/images/alface.png')}/>
            </View>
            <View>
                    <View style={estilo.view3}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/fátima.png')} />
                        </TouchableOpacity>

                        <Text style={estilo.text8}>Fátima da silva </Text>

                        <Image
                        style={{marginLeft:15,height:14,marginTop:5}}
                        source={require('../assets/images/estrela.png')}/>
                    </View>
                    
                    <View style={{flexDirection:'row',marginLeft:82,marginTop:35,position:'absolute'}}>
                        <Text style={estilo.text6}>09:20</Text>
                        <Text style={estilo.text6}>Cidade velha</Text>
                        <Text style={estilo.text7}>Hortifruti</Text>
                    </View>

                    
                    <View style={{flexDirection:'row',position:'absolute',marginTop:65}}>
                        <Text style={estilo.text9}>Alface americano</Text>
                        <Text style={estilo.text10}>R$ 2,90</Text>
                    </View>

                    <Image
                    style={{marginTop:12,marginLeft:85}}
                    source={require('../assets/images/alface.png')}/>
            </View>
            <View>
                    <View style={estilo.view3}>
                        <TouchableOpacity>
                            <Image source={require('../assets/images/fátima.png')} />
                        </TouchableOpacity>

                        <Text style={estilo.text8}>Fátima da silva </Text>

                        <Image
                        style={{marginLeft:15,height:14,marginTop:5}}
                        source={require('../assets/images/estrela.png')}/>
                    </View>
                    
                    <View style={{flexDirection:'row',marginLeft:82,marginTop:35,position:'absolute'}}>
                        <Text style={estilo.text6}>09:20</Text>
                        <Text style={estilo.text6}>Cidade velha</Text>
                        <Text style={estilo.text7}>Hortifruti</Text>
                    </View>

                    
                    <View style={{flexDirection:'row',position:'absolute',marginTop:65}}>
                        <Text style={estilo.text9}>Alface americano</Text>
                        <Text style={estilo.text10}>R$ 2,90</Text>
                    </View>

                    <Image
                    style={{marginTop:12,marginLeft:85}}
                    source={require('../assets/images/alface.png')}/>
            </View>

                
            
        </ScrollView>

        

       
        </View>


    )


}


const estilo = StyleSheet.create({
    view1: {  flexDirection: 'row' },
    
    view2:{ marginTop:10,  width: 120, marginLeft:90, flexDirection:'row'},
    
    img1:{ marginTop:28, marginLeft:2 },
      
    text1:{ marginTop:22, fontSize:12, marginLeft:12 },
    
    text2:{ marginTop:5, marginLeft: 12, color:'#070707' },
    
    touch1:{  marginRight:40 },
    
    text4:{ color:'#a7a7a7' },
    
    text5:{ color: '#F35B04', textDecorationLine:'underline' },
    
    text6:{ marginRight:12, color: '#a7a7a7' },
    
    text7:{ color:'#a7a7a7'},

    view3:{flexDirection:'row',marginTop:12, position:'relative', marginTop:2},

    text8:{marginLeft:12,fontSize:16},

    text9:{marginLeft:85,marginRight:12},

    text10:{color:'#F35B04'},

    
        
    })

               
