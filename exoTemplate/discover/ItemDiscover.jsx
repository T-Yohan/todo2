import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import diStyles from './diStyles';

const ItemDiscover = ({product}) => {
  return (
    <View style={diStyles.card}>
      <View style={diStyles.cardCat}>
        <Text> {product.category} </Text>
        <View style={diStyles.cardImg}>
          <ImageBackground
            source={{uri: product.thumbnail}}
            resizeMode="cover"
            imageStyle={{borderRadius: 20}}></ImageBackground>
        </View>
      </View>
    </View>
    
  );
};

export default ItemDiscover;
