import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import useMainStore from '../../main/MainStore';

export default function ProviderHomeScreen() {
  const { me } = useMainStore((state) => ({
    me: state.me,
  }));
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Text>Me: {JSON.stringify(me, null, 2)}</Text>
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
