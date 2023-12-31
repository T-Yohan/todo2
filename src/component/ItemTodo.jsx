import { View, Text, Button } from 'react-native'
import React from 'react'
import firestore from '@react-native-firebase/firestore';

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
    <View>
        {todo.status ? <Text style={{textDecorationLine:'line-through'}}>{todo?.task}</Text>
        : <Text>{todo?.task}</Text>
        }
      <Button title='update' onPress={realiser}/>
      <Button title='Del' onPress={supprimer}/>
    </View>
  )
}

export default ItemTodo