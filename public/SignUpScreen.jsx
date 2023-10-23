import { View, Text, Button,TextInput } from 'react-native'
import React ,{useState} from 'react'
import auth from '@react-native-firebase/auth';//gère la connexion
import firestore from '@react-native-firebase/firestore';//gère la base de donnée


const SignUpScreen = ({navigation}) => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const inscription = async() => { 
    try {
      if (email!=""&& password!=""){
        console.log("email","password")
        const user = await auth().createUserWithEmailAndPassword(email,password);
        //enregistrement de l'utilisateur en base de donnée à l'aide de son UID
        await firestore().collection('user').doc(user.uid).set({
          email:email
        });
      }
    } catch (error) {
      console.log(error);
    }
    }
  const goto = () => { 
    navigation.navigate("SignIn");
    }
    return (
      <View>
        <TextInput
          placeholder="email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="inscription" onPress={inscription}/>
        <Button title="connexion" onPress={goto}/>
      </View>
    )
  }

export default SignUpScreen