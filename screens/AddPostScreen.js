import * as React from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaViewBase,
  TextInput
} from 'react-native'

export default function AddPostScreen() {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#EB7121',
          height: 80
        }}
      >
        <View
          style={{
            marginTop: 40,
            marginLeft: 15
          }}
        >
          <Image source={require('../assets/images/Vector-3.png')} />
        </View>
        <Text
          style={{
            marginTop: -21,
            marginLeft: 40,
            color: '#FFFFFF',
            fontSize: 20
          }}
        >
          Nova Postagem
        </Text>
        <View
          style={{
            marginTop: -26,
            marginLeft: 296,
            color: '#F3AC7D',
            flexDirection: 'row'
          }}
        >
          <TouchableOpacity>
            <Text style={{ color: '#F3AC7D', fontSize: 20 }}>Publicar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View
          style={{
            marginTop: 10,
            width: 120,
            marginLeft: 90
          }}
        ></View>

        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <View>
            <Image
              style={{ marginLeft: 20, marginTop: 10 }}
              source={require('../assets/images/user.png')}
            />
            <Text
              style={{
                fontSize: 14,
                textAlign: 'right',
                color: '#000000',
                marginLeft: 80,
                marginTop: -30
              }}
            >
              Fátima da Silva
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          marginLeft: 15,
          marginTop: 20,
          marginRight: 10,
          borderColor: '#EB7121'
        }}
      >
        <TextInput placeholder="Nome do produto*" required></TextInput>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          marginLeft: 15,
          marginTop: 20,
          marginRight: 10,
          borderColor: '#B9B9B9'
        }}
      >
        <TextInput placeholder="Descrição"></TextInput>
      </View>

      <Text
        style={{
          marginTop: 20,
          marginLeft: 15,
          color: '#ABABAB'
        }}
      >
        Preço*
      </Text>
      <View
        style={{
          borderBottomWidth: 1,
          marginLeft: 15,
          marginTop: 20,
          marginRight: 270,
          borderColor: '#B9B9B9'
        }}
      >
        <TextInput placeholder="De:"></TextInput>
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          marginLeft: 200,
          marginTop: -29,
          marginRight: 80,
          borderColor: '#B9B9B9'
        }}
      >
        <TextInput placeholder="Por:"></TextInput>
      </View>
      <View>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 12,
            color: '#ABABAB'
          }}
        >
          Localização*
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: '#EB7121',
          marginLeft: 15,
          height: 42,
          width: 42,
          borderRadius: 4
        }}
      >
        <View>
          <Image
            style={{ marginLeft: 15, marginTop: 10 }}
            source={require('../assets/images/Vector-1.png')}
          />
        </View>
      </View>

      <View
        style={{
          borderBottomWidth: 1,
          marginLeft: 75,
          marginTop: -30,
          marginRight: 20,
          fontSize: 12,
          color: '#EB7121',
          borderColor: '#ABABAB'
        }}
      >
        <TextInput placeholder="Nome do Estabelecimento*"></TextInput>
      </View>
      <View>
        <Text
          style={{
            marginTop: 15,
            marginLeft: 15,
            fontSize: 12,
            color: '#ABABAB'
          }}
        >
          Foto do Produto*
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: '#EB7121',
          marginLeft: 15,
          height: 42,
          width: 42,
          borderRadius: 4
        }}
      ></View>
      <View>
        <Image
          style={{ marginLeft: 23, marginTop: -35 }}
          source={require('../assets/images/Cam.png')}
        />
        <Image
          style={{ marginLeft: 73, marginTop: -31 }}
          source={require('../assets/images/food1.png')}
        />
        <Image
          style={{ marginLeft: 125, marginTop: -46 }}
          source={require('../assets/images/food2.png')}
        />
      </View>
      <View>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 10,
            fontSize: 18,
            color: '#EF7C31'
          }}
        >
          Categorias:
        </Text>
      </View>

      <View
        style={{
          marginTop: 10,
          backgroundColor: '#EB7121',
          height: 25,
          with: 20,
          marginLeft: 10,
          marginRight: 310,
          borderRadius: 15
        }}
      >
        <Text
          style={{
            marginLeft: 19,
            marginTop: 2,
            color: '#FFFFFF'
          }}
        >
          Hortifruit
        </Text>
      </View>
      <View
        style={{
          marginTop: -25,
          backgroundColor: '#ABABAB',
          opacity: 0.5,
          height: 25,
          with: 25,
          marginLeft: 110,
          marginRight: 180,
          borderRadius: 15
        }}
      >
        <Text
          style={{
            marginLeft: 10,
            marginTop: 2,
            opacity: 0.9
          }}
        >
          Higiene Pessoal
        </Text>
      </View>
      <View
        style={{
          marginTop: -25,
          backgroundColor: '#ABABAB',
          opacity: 0.5,
          height: 25,
          with: 25,
          marginLeft: 240,
          marginRight: 60,
          borderRadius: 15
        }}
      >
        <Text
          style={{
            marginLeft: 30,
            marginTop: 2,
            opacity: 0.9
          }}
        >
          Limpeza
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: '#ABABAB',
          opacity: 0.5,
          height: 25,
          with: 20,
          marginLeft: 10,
          marginRight: 310,
          borderRadius: 15
        }}
      >
        <Text style={{ marginLeft: 20, marginTop: 2, opacity: 0.9 }}>
          Bebidas
        </Text>
      </View>
      <View>
        <Text
          style={{
            marginLeft: 120,
            marginTop: -20,
            textDecorationLine: 'underline',
            color: '#EB7121'
          }}
        >
          Mais...
        </Text>
      </View>
      <View
        style={{
          marginTop: 25,
          backgroundColor: '#EB7121',
          height: 40,
          with: 40,
          marginLeft: 120,
          marginRight: 140,
          borderRadius: 15
        }}
      >
        <Text
          style={{
            marginLeft: 40,
            marginTop: 5,
            fontSize: 20,
            color: '#FFFFFF'
          }}
        >
          Publicar
        </Text>
      </View>
    </View>
  )
}
