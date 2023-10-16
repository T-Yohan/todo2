import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { courses } from './data'
import CourseItem from './CourseItem'


const Courses = () => {
  return (
    <FlatList
    data={courses}
    renderItem={({item})=><CourseItem course={item}/>}
    keyExtractor={item=>item.id}
    horizontal={true}
    />
  )
}

export default Courses