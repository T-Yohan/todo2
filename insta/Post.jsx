import { View, Text } from 'react-native'
import React from 'react'
import styles from './styles'
import AddPost from './component/AddPost'

const Post = () => {
  return (
    <View style={styles.header} >
      <Text style={styles.text}>InstaLike</Text>
          <AddPost/>
    </View>
  )
}

export default Post