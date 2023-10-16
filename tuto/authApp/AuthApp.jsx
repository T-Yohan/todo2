import {View, Text} from 'react-native';
import React , { useState, useEffect } from 'react';
import RoutePublic from './public/RoutePublic';
import {NavigationContainer} from '@react-navigation/native';
import RouteSecure from './secure/RouteSecure';
import auth from '@react-native-firebase/auth';
const AuthApp = () => {

  const [intializing,setInitializing] = useState(true);
  const [user,setUser] = useState();
  const onAuthStateChange = (user) => { 
  setUser(user);
  if (intializing) setInitializing(false);
  };
  useEffect(() => {
    const subscriber = auth ().onAuthStateChanged(onAuthStateChange)
  
    return subscriber;
  }, [])
  
  if(intializing)return null;

  return (
    <>
      {(!user) ? 
        <NavigationContainer>
          <RoutePublic />
        </NavigationContainer>
       : 
        <RouteSecure />
      }
    </>
  );
};

export default AuthApp;
