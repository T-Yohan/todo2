import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import bikerStyles from './bikerStyles';


const image = {
  uri: 'https://storage.googleapis.com/pod_public/1300/180586.jpg',
};

const Biker = () => {
  return (
    <View style={bikerStyles.container}>
    <View style={bikerStyles.image}>
      <ImageBackground
        source={image}
        resizeMode="contain"
        style={bikerStyles.image}
        imageStyle={{borderRadius:30}}
        >
    <Text style={bikerStyles.title}>The BEST Sensation Ever</Text>
    <Text style={bikerStyles.text}>Try it and you will never regret it!</Text>
    <Text style={bikerStyles.btn}>Order now</Text>
      </ImageBackground>

    </View>
  </View>
  )
}

export default Biker