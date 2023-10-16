import { View, Text, Image } from 'react-native'
import React from 'react'
import styleTest from './styleTest'
import Courses from './Courses'

const Test = () => {
  return (
    <View style={styleTest.container}>
      <View style={styleTest.header}>
        <View style={styleTest.avatar}>
        <Image style={styleTest.avatar} source={require('./assets/YozCartoon.png')}/>
        </View>
        <View style={styleTest.text}>
        <Text style={styleTest.title}>Hi, Yohan</Text>
        <Text style={styleTest.slogan}>learning is easier and faster with us</Text>
        </View>
      </View>
        <View style={styleTest.courses}>
          <Text style={styleTest.courseTitle}>Top Courses</Text>
          <Courses/>
        </View>
    </View>
  )
}

export default Test