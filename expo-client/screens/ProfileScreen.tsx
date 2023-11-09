import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import useMainStore from '../main/MainStore';
import { UserService } from '../beapi';

export default function ProfileScreen() {
  const userService = new UserService();

  const { me, setMe } = useMainStore((state) => ({
    me: state.me,
    setMe: state.setMe,
  }));

  const save = () => {
    if (me) {
      userService
        .updateOne({
          id: me?.id,
          name: me?.name,
          email: me?.email,
        })
        .then((result) => {
          setMe(result);
        })
        .catch(console.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text variant={'displayLarge'} style={styles.title}>
        Onboarding
      </Text>
      <TextInput
        label={'Name'}
        value={me?.name}
        style={styles.input}
      ></TextInput>
      <TextInput
        label={'Email'}
        value={me?.email}
        style={styles.input}
      ></TextInput>
      <Button mode={'outlined'} onPress={save}>
        Save
      </Button>
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
  title: {
    marginBottom: 30,
  },
  input: { marginBottom: 30 },
});
