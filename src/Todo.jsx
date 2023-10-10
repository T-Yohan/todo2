import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import AddTodo from './component/AddTodo'
import ListTodo from './component/ListTodo'

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