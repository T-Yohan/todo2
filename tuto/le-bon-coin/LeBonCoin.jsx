import { View, Text, FlatList } from 'react-native'
import React from 'react'
import leboncoinstyles from './leboncoinstyles'
import { products } from './data'
import ItemLeBonCoin from './ItemLeBonCoin'

const LeBonCoin = () => {
  return (
    <View style={leboncoinstyles.container}> 
        <FlatList
        data={products}
        renderItem={({item})=><ItemLeBonCoin product={item}/>}
        keyExtractor={item=>item.id}
        />
    </View>
  )
}

export default LeBonCoin