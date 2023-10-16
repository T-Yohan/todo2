import { View, Text, FlatList, Image, TextInput } from 'react-native'
import React from 'react'
import diStyles from './diStyles'
import ItemDiscover from './ItemDiscover'
import { products } from './data'
import Icon from 'react-native-vector-icons/MaterialIcons';


const Discover = () => {
  return (
    <View style={diStyles.container}>
      <View style={diStyles.cardContainer}> 
      <View style={diStyles.header}>
      <Icon name="menu" size={30} color="black" style={diStyles.icon}></Icon>
      <Image style={diStyles.png} source={require('./assets/YozCartoon.png')}/>
      </View>
      <View style={diStyles.title}>
      <Text style={diStyles.text}>Discover</Text>
      </View>
      <View>
      <TextInput
      style={diStyles.input}
      placeholder='Search...'
      />
      </View>
      <View style={diStyles.card}>
        <FlatList
      data={products}
      renderItem={({item})=><ItemDiscover product={item}/>}
      keyExtractor={item=>item.id}
        />
      </View>

      </View>

    </View>
  )
}

export default Discover