import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignInScreen from '../public/SignInScreen';
import SignUpScreen from '../public/SignUpScreen';
import ProfileScreen from '../private/ProfileScreen';
import Courses from '../test161023/Courses';
import auth from '@react-native-firebase/auth';
import { useDispatch,useSelector } from 'react-redux';
import { resetUser, setUser } from '../redux/userReducer';
const Stack = createNativeStackNavigator();
const RouteDavisScreen = () => {
// const [user, setUser] = useState();
const [initializing, setInitializing] = useState(true);


const user = useSelector(state=>state.user);
const dispatch = useDispatch()

//change l'état de l'utilisateur
const onUserStateChanged = (user) => {
    // setUser(user);
if (!user){
    dispatch(resetUser());
}else{
    dispatch(setUser(user.uid));
}
    if (initializing) setInitializing(false);
}

useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onUserStateChanged);
    return subscriber; // unsubscribe on unmount
    }, []);

    return (
    <NavigationContainer>
        <Stack.Navigator>
                    {!user ? (
        <>
            <Stack.Screen name="SignIn" component={SignInScreen} />
            <Stack.Screen name="SignUp" component={SignUpScreen} />
        </>
        ) : (
        <>
            <Stack.Screen name="Home" component={Courses} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </>
        )}
        </Stack.Navigator>
    </NavigationContainer>
    );
};

export default RouteDavisScreen;
