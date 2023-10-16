import { View, Text, Image } from 'react-native'
import React from 'react'
import styleTest from './styleTest'
import Icon from 'react-native-vector-icons/MaterialIcons';

const CourseItem = ({course}) => {


  return (
    <View style={styleTest.courseBox}>
      <View style={styleTest.rate}>
        <Icon name="star" size={20} color="#ff0048" ></Icon>
        <Text> {course.rate} </Text>
      </View>
      <Text> {course.title} </Text>
      <View style={styleTest.courseBoxInfos}>
        <View > 
        <Image style={styleTest.avatar} source={require('./assets/YozCartoon.png')}/>
        </View>
        <View style={styleTest.infos}>
        <Text style={styleTest.poste}> {course.poste} </Text>
        <Text style={styleTest.name}> {course.name} </Text>          
        </View>
      </View>
<View>
  <View>
    
  </View>
</View>
    </View>
  )
}

export default CourseItem