import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import OnboardingInitialScreen from '../screens/OnboardingInitialScreen';
import ProviderHomeScreen from '../screens/ProviderHomeScreen';

const Stack = createNativeStackNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen
          name="OnboardingInitial"
          component={OnboardingInitialScreen}
        />
        <Stack.Screen name="ProviderHome" component={ProviderHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
