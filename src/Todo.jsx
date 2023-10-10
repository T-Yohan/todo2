import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import AddTodo from './component/AddTodo'
import ListTodo from './component/ListTodo'
import ItemTodo from './component/ItemTodo'

const Todo = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.header}>TodoList</Text>
<AddTodo/>
<ListTodo/>
    </View>
  )
}

export default Todo