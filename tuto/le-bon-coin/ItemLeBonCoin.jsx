import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import leboncoinstyles from './leboncoinstyles';
import styles from '../../src/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';


const ItemLeBonCoin = ({product}) => {

const goto = () => { 

    }

    return (
        <TouchableOpacity onPress={goto} style={leboncoinstyles}>
        <View style={leboncoinstyles.cardContainer}>
        <View style={leboncoinstyles.cardImage}>
        <ImageBackground 
        source={{uri:product.thumbnail}}
        resizeMode='cover'
        style={leboncoinstyles.cardImage}
        imageStyle={{borderRadius:20}}
        >
            <View style={leboncoinstyles.favIcon}>
            <Icon name="favorite-border" size={30} color="#ffff" ></Icon>
            </View>
        </ImageBackground>
        <View style={leboncoinstyles.containerTitlePrice}>
    <Text style={leboncoinstyles.title}>{product.title}</Text>
    <Text style={leboncoinstyles.price}>{product.price} €</Text>
        </View>
    <View style={leboncoinstyles.containerBrand}>
    <Text style={leboncoinstyles.brand}>{product.brand}</Text>
    <Text style={leboncoinstyles.brand}>{product.category}</Text>
    </View>
</View> 
</View>
</TouchableOpacity>
    );
    };


export default ItemLeBonCoin;
