import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';


const SignUp = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

  const goto = () => {
    navigation.navigate('signUp');
  };

  const send = async() => {
try {
  await auth().signInWithEmailAndPassword(email,password);
} catch (error) {
  console.log('error',error);
}
    console.log('envoyer', password, email);
  };

  return (
    <View>
      <TextInput
        label="email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        label="password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button onPress={send} title="se connecter">
        Se connecter
      </Button>

      <Button onPress={goto} title="sign in">
        Sign in
      </Button>
      <Text>SignUp</Text>
    </View>
  );
};

export default SignUp;
