import { View, Text, Button } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';
import styles from '../styles';

const ItemTodo = ({todo}) => {

const supprimer = () => {
firestore().collection('Todo').doc(todo.id).delete()
}
const realiser = () => {
    firestore().collection('Todo').doc(todo.id).update({
        status : !todo.status,
    })
}
  return (
    <View style={styles.task}>
      <Button color="green" title='upd' onPress={realiser}/>
        {todo.status ? <Text style={{textDecorationLine:'line-through'}}>{todo?.task}</Text>
        : <Text>{todo?.task}</Text>
        }
      <Button color="red" title='Del' onPress={supprimer}/>
    </View>
  )
}

export default ItemTodo