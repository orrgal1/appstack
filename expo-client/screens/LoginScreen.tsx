import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GoogleLoginButton from '../components/googleLoginButton';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <GoogleLoginButton />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
