import { View, Text ,Button ,TextInput} from 'react-native'
import React, { useState } from 'react'
import SignUpScreen from './SignUpScreen';
import auth from '@react-native-firebase/auth';//gère la connexion
import firestore from '@react-native-firebase/firestore';//gère la base de donnée

const SignInScreen = ({navigation}) => {

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

const goto = () => { 

  navigation.navigate("SignUp");
  }

  const connection = async() => { 
    try {
      await auth().signInWithEmailAndPassword(email,password);
    } catch (error) {
      console.log(error)
    }
    }
  return (
    <View>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={setEmailr}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="connexion"/>
      <Button title="inscription" onPress={goto}/>
    </View>
  )
}

export default SignInScreen