import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import styles from '../styles';


const AddPost = () => {
const [post, setPost] = useState("");
const send = (value) => {
    firestore().collection('post').add({
                                        name:value,
                                        media:value,
                                        dateins:Date.now(),
                                        })
    setPost("");
}

  return (
    <View style={styles.header}>
        <Image style={styles.avatar} source={require('../Assets/YozCartoon.png')}/>
    </View>
  )
}

export default AddPost