import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import React from 'react';
import burgerStyles from './burgerStyles';

const image = {
  uri: 'https://calleats.com/wp-content/uploads/2022/12/Livraison-repas-4.jpg',
};

const Burger = () => {
  return (
      <View style={burgerStyles.container}>
        <View style={burgerStyles.image}>
          <ImageBackground
            source={image}
            resizeMode="stretch"
            style={burgerStyles.image}
            imageStyle={{borderRadius:30}}
            >
        <Text style={burgerStyles.text}>Get Started</Text>
          </ImageBackground>

        </View>
      </View>

  );
};

export default Burger;
