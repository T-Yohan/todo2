import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import firestore from '@react-native-firebase/firestore';
import ItemTodo from './ItemTodo';
import styles from '../styles';

const ListTodo = () => {

/**
 * init all state
 */

  //initialiser les données
const[todos,setTodos] = useState([]);
//initialiser le loading
const [loading,setLoading] = useState(true);


useEffect(() => {
  // console.log('lister');
  firestore().collection('Todo').onSnapshot(querySnapshot=>{
// console.log('querySnapshot',querySnapshot);

const dataTodos = [];

//lecture du document
querySnapshot.forEach(doc=>{
  // console.log(doc.data());
  dataTodos.push({id:doc.id,
                    ...doc.data()
                })
})
setTodos(dataTodos);
loading && setLoading(false);
  })
}, [])

  return (
    <View style={styles.list}>
      {loading? <ActivityIndicator animating={true}/> 
      : <FlatList
      data={todos}
      renderItem={({item})=><ItemTodo todo={item}/>}
      keyExtractor={item=>item.id}
      />}
    </View>
  )
}

export default ListTodo