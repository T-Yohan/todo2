import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [send, setSend] = useState();

  const goto = () => {
    navigation.navigate('signIn');
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

      <Button onPress={goto} title="sign up">
        Sign up
      </Button>
      <Text>SignIn</Text>
    </View>
  );
};

export default SignIn;
