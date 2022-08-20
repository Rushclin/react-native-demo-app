import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { useSelector } from 'react-redux';
import InstagramHomeScreen from '../../../screens/Instgram/InstagramHomeScreen';
import InstagramLoginScreen from '../../../screens/Instgram/InstagramLoginScreen';

const Stack = createNativeStackNavigator();

const InstagramStackNavigation = () => {
    const state = useSelector((state) => state)
    console.log("L'etat est : ", state.user)
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="InstagramLoginScreen"
                component={InstagramLoginScreen}
                options={{ title: 'Login', headerShown: false }}
            />
            <Stack.Screen
                name='InstagramHomeScreen'
                component={InstagramHomeScreen}
                options={{ title: "Home" }}
            />
        </Stack.Navigator>
    );
};

export default InstagramStackNavigation;